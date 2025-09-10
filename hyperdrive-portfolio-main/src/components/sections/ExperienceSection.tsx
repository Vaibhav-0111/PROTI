import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { ExperienceOrb } from '../3d/ExperienceOrb';
import { Badge } from '../ui/badge';
import { Building, Calendar, MapPin, Award } from 'lucide-react';

const experiences = [
  {
    company: "Lovely Professional University",
    role: "Patent Analyst",
    duration: "Apr 2025 - Present (6 months)",
    location: "Phagwara, Punjab, India · On-site",
    description: "Patent Trainee responsible for supporting end-to-end patent drafting and prosecution. Conducting prior art searches, analyzing technical disclosures, drafting patent specifications, and collaborating with inventors and legal professionals.",
    skills: ["Patent Law", "Patent Litigation", "IP Strategy"],
    color: "#8B5CF6",
    position: [-3, 0, 0] as [number, number, number],
    type: "Part-time"
  },
  {
    company: "Internship Studio",
    role: "Team Member (Tester)",
    duration: "Jul 2024 - Aug 2024 (2 months)",
    location: "India · Remote",
    description: "Software testing, SDLC model implementation, cost estimation, and selenium testing. Focused on quality assurance and testing methodologies.",
    skills: ["Software Testing Life Cycle (STLC)", "Software Testing", "Selenium", "SDLC", "Cost Estimation", "Quality Assurance"],
    color: "#06B6D4",
    position: [3, 0, 0] as [number, number, number],
    type: "Self-employed"
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional Experience
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Journey through my professional growth and achievements
          </motion.p>
        </motion.div>

        {/* 3D Experience Visualization */}
        <motion.div
          className="h-96 mb-16 rounded-2xl overflow-hidden glass"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} />
            
            {/* Experience Orbs */}
            {experiences.map((exp, index) => (
              <ExperienceOrb
                key={index}
                position={exp.position}
                company={exp.company}
                role={exp.role}
                duration={exp.duration}
                location={exp.location}
                description={exp.description}
                color={exp.color}
                scale={1.2}
              />
            ))}
          </Canvas>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {exp.company}
                  </h3>
                  <p className="text-lg font-semibold text-foreground mb-1">
                    {exp.role}
                  </p>
                  <Badge variant="secondary" className="mb-4">
                    {exp.type}
                  </Badge>
                </div>
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${exp.color}20` }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Building className="w-8 h-8" style={{ color: exp.color }} />
                </motion.div>
              </div>

              {/* Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="glass p-6 rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-sm text-muted-foreground">Companies</div>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-sm text-muted-foreground">Months Experience</div>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">9+</div>
            <div className="text-sm text-muted-foreground">Skills Mastered</div>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};