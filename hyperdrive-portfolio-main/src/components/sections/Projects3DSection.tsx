import { motion } from 'framer-motion';
import { Enhanced3DScene } from '../3d/Enhanced3DScene';
import { TextReveal } from '../animations/TextReveal';
import { MagneticButton } from '../animations/MagneticButton';

export const Projects3DSection = () => {
  const projects = [
    {
      title: '3D Avatar Chatbot',
      description: 'Developed an interactive AI chatbot during Code-A-Haunt hackathon. Implemented using Socket.io for real-time communication, React.js for efficient UI, and Google Auth for seamless authentication. Enhanced design with HTML and CSS.',
      tech: ['React.js', 'Socket.io', 'Google Auth', 'HTML', 'CSS', 'Node.js', 'Real-time Communication'],
      color: '#64ffda'
    },
    {
      title: 'Personalized Learning Platform',
      description: 'Built an interactive educational website with subject-specific pages for Mathematics, English, and Computer Science. Utilized responsive design techniques for cross-device accessibility and gained expertise in front-end development.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX Design', 'Cross-browser Compatibility'],
      color: '#a855f7'
    },
    {
      title: 'Code Challenge Solutions',
      description: 'Demonstrated advanced problem-solving skills in competitive programming. Secured winning positions in multiple hackathons including CODE OFF DUTY and Code-A-Haunt, showcasing expertise in algorithms and data structures.',
      tech: ['Python', 'C++', 'Data Structures', 'Algorithms', 'Problem Solving', 'Competitive Programming'],
      color: '#ff6b9d'
    },
    {
      title: 'Portfolio Website',
      description: 'Created this immersive 3D portfolio website using modern web technologies. Features advanced animations, interactive 3D elements, and responsive design principles.',
      tech: ['React', 'Three.js', 'Framer Motion', 'TypeScript', 'Tailwind CSS', 'GSAP'],
      color: '#ffd700'
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* 3D Projects Showcase */}
      <div className="absolute inset-0 z-0">
        <Enhanced3DScene 
          mode="projects" 
          projects={projects} 
          enableControls={true}
          cameraPosition={[0, 2, 12]} 
        />
      </div>
      
      {/* Top Header */}
      <div className="absolute top-8 left-0 right-0 z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
            <TextReveal delay={200} type="glitch">
              Project Showcase
            </TextReveal>
          </div>
        </motion.div>
      </div>

      {/* Bottom Instructions */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 text-center px-6">
        <motion.p
          className="text-sm md:text-base text-muted-foreground glass px-4 py-2 rounded-full backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="text-primary">Click projects to explore • Drag to navigate</span>
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <MagneticButton
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan hover-lift px-6 py-3 rounded-lg"
            onClick={() => window.open('https://github.com/Vaibhav-0111', '_blank')}
          >
            View All Projects
          </MagneticButton>
          <MagneticButton className="border border-accent text-accent hover:bg-accent/10 hover-lift px-6 py-3 rounded-lg bg-transparent"
            onClick={() => window.open('/vaibhav-tripathi-cv.html', '_blank')}
          >
            Download Resume
          </MagneticButton>
        </motion.div>
      </div>
      
      {/* Project Stats */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="glass px-4 py-2 rounded-lg">
          <div className="text-2xl font-bold text-primary">4+</div>
          <div className="text-sm text-muted-foreground">Projects</div>
        </div>
        <div className="glass px-4 py-2 rounded-lg">
          <div className="text-2xl font-bold text-accent">2+</div>
          <div className="text-sm text-muted-foreground">Hackathons Won</div>
        </div>
        <div className="glass px-4 py-2 rounded-lg">
          <div className="text-2xl font-bold text-secondary">15+</div>
          <div className="text-sm text-muted-foreground">Technologies</div>
        </div>
      </motion.div>
    </section>
  );
};