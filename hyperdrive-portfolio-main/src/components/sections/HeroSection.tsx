import { motion } from 'framer-motion';
import { Enhanced3DScene } from '../3d/Enhanced3DScene';
import { MagneticButton } from '../animations/MagneticButton';
import { TextReveal } from '../animations/TextReveal';
import { ScrambledText } from '../animations/ScrambledText';
import { Button } from '../ui/button';
import { useState, useEffect } from 'react';
import { Badge } from '../ui/badge';
import { Github, Linkedin, Mail, Phone, Download, Award } from 'lucide-react';

const greetings = [
  { text: "Hello World", lang: "English" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "Hola Mundo", lang: "Spanish" },
  { text: "Bonjour", lang: "French" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "안녕하세요", lang: "Korean" }
];

export const HeroSection = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 z-0">
        <Enhanced3DScene mode="hero" cameraPosition={[0, 0, 10]} />
      </div>

      {/* Floating Contact Info */}
      <motion.div
        className="absolute top-8 right-8 z-20 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="glass p-4 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-primary" />
            <span>vaibhavtripathi724@gmail.com</span>
          </div>
          <div className="flex gap-2">
            <motion.a
              href="https://github.com/Vaibhav-0111"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass rounded-lg hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vaibhavtripathi75/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass rounded-lg hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Profile Photo on Right */}
      <motion.div
        className="absolute top-32 right-8 z-20 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 glass">
            <img 
              src="/src/assets/profile-photo.jpg"
              alt="Vaibhav Tripathi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/20"></div>
          </div>
          {/* Floating glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Multi-language Greeting */}
      <motion.div
        className="absolute top-8 left-8 z-20 hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="glass p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              key={currentGreeting}
              className="inline-block text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              style={{
                backgroundSize: '300% 300%',
                filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.6))',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2,
                backgroundPosition: { duration: 3, repeat: Infinity },
                scale: { duration: 2, repeat: Infinity },
              }}
            >
              {greetings[currentGreeting].text}
            </motion.span>
            
            {/* Floating particles around greeting */}
            <div className="absolute -inset-2 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  style={{
                    left: `${20 + i * 25}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="text-sm text-gradient font-medium mt-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {greetings[currentGreeting].lang}
          </motion.div>
          
          {/* Achievement Badges Below */}
          <div className="mt-4 space-y-2">
            <motion.div
              className="flex items-center gap-2 text-xs"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-primary font-bold">3 Hackathons Won</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-xs"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              <span className="text-primary font-bold">10+ Projects Built</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center justify-center mb-6"
        >
          {/* Name and Title */}
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-bold mb-4 relative">
              <ScrambledText
                text="Vaibhav Tripathi"
                className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent select-none font-extrabold"
                scrambleDuration={2000}
                delay={1000}
              />
              
              {/* Floating particles around name */}
              <div className="absolute -inset-10 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/30 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 40}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Badge variant="secondary" className="glass">Full Stack Developer</Badge>
            <Badge variant="secondary" className="glass">React Expert</Badge>
            <Badge variant="secondary" className="glass">3D Enthusiast</Badge>
            <Badge variant="secondary" className="glass">AI/ML</Badge>
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto glass p-6 rounded-2xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Crafting immersive digital experiences with cutting-edge technology. 
            <span className="text-primary font-semibold"> Specialized in React, Node.js, Python</span> 
            and passionate about creating innovative solutions.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <MagneticButton 
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan hover-lift px-8 py-4 text-lg font-semibold rounded-lg group"
              onClick={() => window.open('https://github.com/Vaibhav-0111?tab=repositories', '_blank')}
            >
              <span className="flex items-center gap-2">
                View All Projects
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </MagneticButton>
            
            <MagneticButton 
              className="border border-primary text-primary hover:bg-primary/10 hover-lift px-8 py-4 text-lg rounded-lg bg-transparent"
              onClick={() => {
                window.open('/vaibhav-tripathi-cv.html', '_blank');
              }}
            >
              <span className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download CV
              </span>
            </MagneticButton>
            
            <MagneticButton 
              className="border border-accent text-accent hover:bg-accent/10 hover-lift px-8 py-4 text-lg rounded-lg bg-transparent"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </MagneticButton>
          </motion.div>

          {/* Tech Stack Floating Icons */}
          <motion.div
            className="mt-12 flex justify-center gap-8 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {['React', 'Node.js', 'Python', 'MongoDB', 'Three.js'].map((tech, i) => (
              <motion.div
                key={tech}
                className="glass px-4 py-2 rounded-lg text-sm font-medium"
                whileHover={{ scale: 1.1, y: -5 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="glass w-8 h-12 border-2 border-primary rounded-full flex justify-center relative overflow-hidden">
          <motion.div
            className="w-1.5 h-4 bg-gradient-to-b from-primary to-accent rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
        </div>
        <motion.p
          className="text-xs text-muted-foreground mt-2 opacity-70"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  );
};