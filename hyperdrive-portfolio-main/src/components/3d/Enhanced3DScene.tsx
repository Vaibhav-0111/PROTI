import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Stars } from '@react-three/drei';
import { FloatingCube } from './FloatingCube';
import { EnhancedParticleField } from './EnhancedParticleField';
import { FloatingOrbs } from './FloatingOrbs';
import { HolographicCard } from './HolographicCard';
import { InteractiveSkillsOrb } from './InteractiveSkillsOrb';
import { ProjectShowcase3D } from './ProjectShowcase3D';
import { Suspense } from 'react';

interface Enhanced3DSceneProps {
  enableControls?: boolean;
  cameraPosition?: [number, number, number];
  mode?: 'hero' | 'skills' | 'projects' | 'about';
  skills?: Array<{name: string; level: number; category: 'languages' | 'frameworks' | 'tools'}>;
  projects?: Array<{title: string; description: string; tech: string[]; color: string}>;
}

export const Enhanced3DScene = ({ 
  enableControls = false, 
  cameraPosition = [0, 0, 8],
  mode = 'hero',
  skills = [],
  projects = []
}: Enhanced3DSceneProps) => {
  
  const defaultSkills = [
    { name: 'Python', level: 5, category: 'languages' as const },
    { name: 'JavaScript', level: 5, category: 'languages' as const },
    { name: 'React', level: 5, category: 'frameworks' as const },
    { name: 'Node.js', level: 4, category: 'frameworks' as const },
    { name: 'TypeScript', level: 4, category: 'languages' as const },
    { name: 'Next.js', level: 4, category: 'frameworks' as const },
    { name: 'Git', level: 5, category: 'tools' as const },
    { name: 'Docker', level: 3, category: 'tools' as const },
  ];

  const defaultProjects = [
    {
      title: '3D Avatar Chatbot',
      description: 'Interactive AI chatbot with 3D avatar integration using React.js and modern web technologies.',
      tech: ['React', 'Node.js', 'Socket.io', '3D Graphics'],
      color: '#64ffda'
    },
    {
      title: 'Learning Platform',
      description: 'Personalized online learning and tutoring platform with adaptive content delivery.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      color: '#a855f7'
    },
    {
      title: 'Code Challenge Winner',
      description: 'Hackathon winning project showcasing innovative problem-solving and technical skills.',
      tech: ['Python', 'Data Structures', 'Algorithms'],
      color: '#ff6b9d'
    }
  ];

  const skillsData = skills.length > 0 ? skills : defaultSkills;
  const projectsData = projects.length > 0 ? projects : defaultProjects;

  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={cameraPosition} fov={75} />
      
      {enableControls && <OrbitControls enablePan={false} enableZoom={true} maxDistance={15} minDistance={3} />}
      
      {/* Enhanced Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#64ffda" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#a855f7" />
      <pointLight position={[0, 10, -10]} intensity={0.6} color="#ff6b9d" />
      <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={1} color="#ffffff" />
      
      <Environment preset="night" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <Suspense fallback={null}>
        {mode === 'hero' && (
          <>
            <FloatingCube />
            <EnhancedParticleField count={4000} interactive={true} />
            <FloatingOrbs />
            
            {/* Holographic welcome cards */}
            <HolographicCard 
              text="Full Stack Developer" 
              position={[-3, 2, -2]} 
              color="#64ffda" 
              delay={0}
            />
            <HolographicCard 
              text="AI Enthusiast" 
              position={[3, -1, -1]} 
              color="#a855f7" 
              delay={1}
            />
            <HolographicCard 
              text="Problem Solver" 
              position={[0, -3, -3]} 
              color="#ff6b9d" 
              delay={2}
            />
          </>
        )}
        
        {mode === 'skills' && (
          <>
            <InteractiveSkillsOrb skills={skillsData} />
            <EnhancedParticleField count={2000} interactive={true} color="#64ffda" speed={0.01} />
          </>
        )}
        
        {mode === 'projects' && (
          <>
            <ProjectShowcase3D projects={projectsData} />
            <EnhancedParticleField count={1500} interactive={true} color="#a855f7" speed={0.015} />
          </>
        )}
        
        {mode === 'about' && (
          <>
            <FloatingOrbs />
            <EnhancedParticleField count={3000} interactive={true} />
            
            {/* Achievement timeline in 3D */}
            <HolographicCard 
              text="Hackathon Winner" 
              position={[-2, 3, 0]} 
              color="#64ffda" 
            />
            <HolographicCard 
              text="Internship Leader" 
              position={[2, 1, 0]} 
              color="#a855f7" 
            />
            <HolographicCard 
              text="Tech Fest Champion" 
              position={[0, -1, 0]} 
              color="#ff6b9d" 
            />
          </>
        )}
      </Suspense>
    </Canvas>
  );
};