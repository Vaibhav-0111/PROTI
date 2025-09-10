import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { MagneticButton } from '../animations/MagneticButton';
import { TextReveal } from '../animations/TextReveal';

const projects = [
  {
    title: "Neural Dashboard",
    description: "AI-powered analytics platform with real-time data visualization and machine learning insights",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Quantum Commerce",
    description: "Next-gen e-commerce platform with 3D product visualization and AR integration",
    tech: ["Next.js", "Three.js", "WebAR", "Stripe"],
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Blockchain Voting",
    description: "Decentralized voting system ensuring transparency and security through blockchain",
    tech: ["Solidity", "Web3.js", "React", "IPFS"],
    gradient: "from-green-500 to-teal-500"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            <TextReveal delay={200} type="fade">
              Featured Projects
            </TextReveal>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work in web development, 3D experiences, and innovative digital solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                z: 50
              }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                transformStyle: "preserve-3d",
                perspective: 1000
              }}
              className="group"
            >
              <Card className="glass border-border/20 hover:border-primary/50 transition-all duration-smooth hover-lift h-full">
                <CardHeader>
                  <div className={`w-full h-48 bg-gradient-to-r ${project.gradient} rounded-lg mb-4 opacity-80 group-hover:opacity-100 transition-opacity`} />
                  <CardTitle className="text-xl font-bold text-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <MagneticButton className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm">
                      Live Demo
                    </MagneticButton>
                    <MagneticButton className="flex-1 border border-primary text-primary hover:bg-primary/10 px-4 py-2 rounded-md text-sm bg-transparent">
                      Code
                    </MagneticButton>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};