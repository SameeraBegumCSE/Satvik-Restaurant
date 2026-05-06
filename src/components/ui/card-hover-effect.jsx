

import { cn } from "../../lib/utils"
import { AnimatePresence, motion } from "motion/react"

import { useState } from "react"

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10", className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-primary/10 dark:bg-primary/20 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  )
}

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-card/80 backdrop-blur-sm border border-border/50 group-hover:border-primary/50 relative z-20 transition-all duration-300 hover:shadow-lg",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}
export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-card-foreground font-bold tracking-wide mt-4 group-hover:text-primary transition-colors duration-300",
        className,
      )}
    >
      {children}
    </h4>
  )
}
export const CardDescription = ({ className, children }) => {
  return <p className={cn("mt-8 text-muted-foreground tracking-wide leading-relaxed text-sm", className)}>{children}</p>
}
