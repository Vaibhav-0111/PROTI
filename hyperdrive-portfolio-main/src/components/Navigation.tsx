import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

export const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-6"
    >
      <div className="glass rounded-2xl px-8 py-4 mx-auto max-w-fit">
        <div className="flex items-center space-x-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-xl font-bold text-gradient"
          >
            VT
          </motion.div>
          
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-foreground hover:text-primary transition-colors duration-smooth magnetic"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                {hoveredItem === item.name && (
                  <motion.div
                    layoutId="navHover"
                    className="absolute inset-0 bg-primary/20 rounded-lg -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};