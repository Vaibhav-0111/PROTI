import { motion } from 'framer-motion';

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", 
  "Python", "Three.js", "GSAP", "TailwindCSS",
  "PostgreSQL", "MongoDB", "AWS", "Docker"
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
              About Me
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I'm Vaibhav Tripathi, a Computer Science and Engineering student at Lovely 
                Professional University, passionate about building impactful digital solutions. 
                I specialize in full-stack development, data structures & algorithms, and 
                creating interactive user experiences.
              </p>

              <p>
                My journey started with curiosity about technology, which led me to explore
                programming through Python, C++, Java, and modern web technologies. Over time,
                I have built projects ranging from interactive educational platforms to
                3D-avatar based chatbots, and actively participated in hackathons, securing
                top positions.
              </p>
        

              <p>
              Beyond coding, I enjoy problem-solving, collaborating in teams, and continuously 
              learning new tools and frameworks. Whether it’s building efficient algorithms, 
              designing creative websites, or contributing to open-source projects, I’m always 
              eager to push my limits and grow as a developer.
              </p>

            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-neon">Skills & Technologies</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-primary/20 text-primary px-4 py-3 rounded-lg text-center font-medium hover:bg-primary/30 transition-colors magnetic"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-semibold text-foreground mb-2">Currently Learning</h4>
              <p className="text-muted-foreground">WebGPU, Rust, and Advanced Shader Programming</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};