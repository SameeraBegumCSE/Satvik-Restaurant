import { motion } from 'motion/react';
import { useTheme } from '../../context/ThemeContext.jsx';

const colorOptions = [
  { name: 'Orange', value: '#e97c0a' },
  { name: 'Blue', value: '#2563eb' },
  { name: 'Green', value: '#16a34a' },
  { name: 'Purple', value: '#9333ea' },
  { name: 'Red', value: '#dc2626' },
  { name: 'Teal', value: '#0891b2' }
];

export default function ColorThemeSelector() {
  const { color, setColor } = useTheme();

  return (
    <motion.div 
      className="fixed top-8 right-8 z-50"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div 
        className="bg-card border border-border rounded-xl p-4 shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <p className="text-sm font-medium text-card-foreground mb-3 text-center">Theme Color</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {colorOptions.map((colorOption) => (
            <motion.button
              key={colorOption.value}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                color === colorOption.value 
                  ? 'border-foreground scale-110' 
                  : 'border-border hover:border-foreground'
              }`}
              style={{ backgroundColor: colorOption.value }}
              onClick={() => setColor(colorOption.value)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={colorOption.name}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}