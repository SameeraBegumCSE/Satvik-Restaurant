import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';
import founderImage from "../../images/founder.jpg";

export default function About() {
  const { color } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const restaurantImage1 = "https://images.unsplash.com/photo-1728891715962-ffee8c61e38e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbSUyMGF0bW9zcGhlcmV8ZW58MXx8fHwxNzU1OTI1NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const restaurantImage2 = "https://images.unsplash.com/photo-1743793055775-3c07ab847ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbSUyMGF0bW9zcGhlcmV8ZW58MXx8fHwxNzU1OTI1NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-background"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Hero Section with Images at Top */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        variants={itemVariants}
      >
        {/* Background Images */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <motion.div
            className="relative overflow-hidden rounded-3xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={restaurantImage1}
              alt="Satvik Restaurant Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-3xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={restaurantImage2}
              alt="Satvik Restaurant Dining"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
        </div>

        {/* Overlay Content */}
        <motion.div
          className="relative z-10 text-center px-8 py-12 bg-background/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-border max-w-2xl mx-4"
          variants={itemVariants}
          whileHover={{
            y: -10,
            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.25)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            variants={itemVariants}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground"
            variants={itemVariants}
          >
            Discover the story behind{" "}
            <span style={{ color: color }} className="font-semibold">
              Satvik Restaurant
            </span>
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
        variants={itemVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-foreground">
                <span style={{ color: color }} className="font-semibold">
                  Welcome to Satvik Restaurant,{" "}
                </span>
                where purity meets taste in every bite. We serve
                soul-satisfying, 100% vegetarian meals crafted with love,
                tradition, and wellness in mind.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Philosophy
              </h3>
              <p className="text-lg leading-relaxed text-foreground">
                At Satvik, every dish is a celebration of nature's finest
                ingredients and ancient Indian culinary wisdom. Step into a
                space where peace, flavor, and nourishment blend harmoniously.
              </p>
            </div>
          </motion.div>

          <motion.div className="relative" variants={itemVariants}>
            <div className="relative">
              <motion.div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl opacity-20"
                style={{ backgroundColor: color }}
                animate={{ rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              ></motion.div>
              <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg">
                <p className="text-lg italic text-card-foreground">
                  "We believe that food is not just for the body, but
                  nourishment for the soul. Rooted in ancient Indian traditions,
                  we serve pure vegetarian meals that celebrate health, harmony,
                  and heritage."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Unique Founder Section */}
      <motion.section
        className="py-20 px-4 md:px-8 lg:px-16 bg-muted/30 relative overflow-hidden"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-center text-3xl md:text-4xl font-bold text-foreground mb-16"
            variants={itemVariants}
          >
            Meet Our Founder
          </motion.h2>

          <motion.div className="relative" variants={itemVariants}>
            {/* Decorative elements */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
              style={{ backgroundColor: color }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
            <motion.div
              className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-10"
              style={{ backgroundColor: color }}
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 5, repeat: Infinity }}
            ></motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Founder Image */}
              <motion.div
                className="lg:col-span-1 flex justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${color}20, transparent)`,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  ></motion.div>
                  <img
                    src={founderImage}
                    alt="Sameera Begum - Founder"
                    className="relative z-10 w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-background shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Founder Content */}
              <motion.div
                className="lg:col-span-2 space-y-8"
                variants={itemVariants}
              >
                <motion.div
                  className="relative bg-card border border-border rounded-3xl p-8 shadow-lg"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="absolute top-0 left-8 w-16 h-1 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                  <blockquote className="text-lg md:text-xl leading-relaxed text-card-foreground italic mt-4">
                    "Our mission is to ensure that every individual experiences
                    the purity and nourishment of authentic satvik food, crafted
                    with love and rooted in tradition. We believe that food is
                    not just a necessity, but a sacred experience that should be
                    wholesome, affordable, and accessible to all."
                  </blockquote>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                >
                  <div
                    className="w-3 h-12 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Sameera Begum
                    </h3>
                    <p className="text-lg" style={{ color: color }}>
                      Founder and CEO, Satvik Restaurant
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Unique Vision Section */}
      <motion.section
        className="py-20 px-4 md:px-8 lg:px-16 relative"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-center text-3xl md:text-4xl font-bold text-foreground mb-16"
            variants={itemVariants}
          >
            Our Vision
          </motion.h2>

          <motion.div className="relative" variants={itemVariants}>
            {/* Creative background shapes */}
            <motion.div
              className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-5"
              style={{ backgroundColor: color }}
              animate={{
                x: [0, 20, 0],
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-10 -right-10 w-32 h-32 opacity-5"
              style={{
                backgroundColor: color,
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
              animate={{
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            ></motion.div>

            <motion.div
              className="relative bg-gradient-to-br from-card via-card to-muted border border-border rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{
                boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.25)",
                y: -10,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Top accent bar */}
              <motion.div
                className="h-2"
                style={{
                  background: `linear-gradient(90deg, ${color}, ${color}80, ${color})`,
                }}
                animate={{
                  background: [
                    `linear-gradient(90deg, ${color}, ${color}80, ${color})`,
                    `linear-gradient(90deg, ${color}80, ${color}, ${color}80)`,
                    `linear-gradient(90deg, ${color}, ${color}80, ${color})`,
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>

              <div className="p-8 md:p-12">
                <motion.div
                  className="flex items-start space-x-6"
                  variants={itemVariants}
                >
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${color}20` }}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: color }}
                    ></div>
                  </motion.div>

                  <div className="flex-1">
                    <p className="text-lg md:text-xl leading-relaxed text-card-foreground">
                      "Our brand seeks to redefine food beyond just sustenance,
                      positioning satvik cuisine as a path to inner well-being,
                      balance, and mindfulness in today's fast-paced world."
                    </p>
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-lg md:text-xl leading-relaxed text-card-foreground">
                        "Satvik Restaurant will serve as a platform where food
                        lovers reconnect with traditional values, share their
                        cultural roots, and celebrate the healing power of pure,
                        conscious eating."
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom decorative elements */}
              <div className="relative h-24 overflow-hidden">
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: color }}
                  animate={{
                    scaleX: [0, 1, 0],
                    originX: [0, 0, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
                <div className="absolute bottom-4 left-8 flex space-x-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: `${color}40` }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Floating decorative elements */}
      <motion.div
        className="fixed top-20 left-10 w-4 h-4 rounded-full opacity-20"
        style={{ backgroundColor: color }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed bottom-20 right-10 w-6 h-6 rounded-full opacity-20"
        style={{ backgroundColor: color }}
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.div>
  );
}