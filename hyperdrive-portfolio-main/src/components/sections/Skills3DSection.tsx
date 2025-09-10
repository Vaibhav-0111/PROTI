import { motion } from 'framer-motion';
import { Enhanced3DScene } from '../3d/Enhanced3DScene';
import { TextReveal } from '../animations/TextReveal';

export const Skills3DSection = () => {
  const skills = [
    { name: 'Python', level: 5, category: 'languages' as const },
    { name: 'C++', level: 4, category: 'languages' as const },
    { name: 'Java', level: 4, category: 'languages' as const },
    { name: 'JavaScript', level: 5, category: 'languages' as const },
    { name: 'TypeScript', level: 4, category: 'languages' as const },
    { name: 'React', level: 5, category: 'frameworks' as const },
    { name: 'Next.js', level: 4, category: 'frameworks' as const },
    { name: 'Node.js', level: 4, category: 'frameworks' as const },
    { name: 'Tailwind', level: 5, category: 'frameworks' as const },
    { name: 'NumPy', level: 4, category: 'frameworks' as const },
    { name: 'Pandas', level: 4, category: 'frameworks' as const },
    { name: 'Git', level: 5, category: 'tools' as const },
    { name: 'VSCode', level: 5, category: 'tools' as const },
    { name: 'Jupyter', level: 4, category: 'tools' as const },
    { name: 'GitHub', level: 5, category: 'tools' as const },
  ];

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* 3D Skills Visualization */}
      <div className="absolute inset-0 z-0">
        <Enhanced3DScene 
          mode="skills" 
          skills={skills} 
          enableControls={true}
          cameraPosition={[0, 0, 8]} 
        />
      </div>
      
      {/* Top Header with Name */}
      <div className="absolute top-8 left-0 right-0 z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-gradient mb-2"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Vaibhav Tripathi
            </motion.h1>
            <motion.p 
              className="text-sm text-primary/80 tracking-[0.2em] uppercase"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Full Stack Developer
            </motion.p>
          </motion.div>
          <div className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
            <TextReveal delay={200} type="fade">
              Interactive Skills
            </TextReveal>
          </div>
        </motion.div>
      </div>

      {/* Bottom Instructions and Legend */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-center px-6">
        <motion.p
          className="text-sm md:text-base text-muted-foreground glass px-4 py-2 rounded-full backdrop-blur-sm mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="text-primary">Drag to rotate • Hover to interact</span>
        </motion.p>
        
        {/* Legend */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg text-xs">
            <div className="w-3 h-3 rounded-full bg-[#64ffda] glow-cyan"></div>
            <span>Programming Languages</span>
          </div>
          <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg text-xs">
            <div className="w-3 h-3 rounded-full bg-[#a855f7] glow-purple"></div>
            <span>Frameworks & Libraries</span>
          </div>
          <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg text-xs">
            <div className="w-3 h-3 rounded-full bg-[#ff6b9d] glow-pink"></div>
            <span>Tools & Platforms</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};