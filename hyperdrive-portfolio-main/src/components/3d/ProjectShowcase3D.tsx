import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text, Html } from '@react-three/drei';
import * as THREE from 'three';

interface Project {
  title: string;
  description: string;
  tech: string[];
  color: string;
}

interface ProjectShowcase3DProps {
  projects: Project[];
}

export const ProjectShowcase3D = ({ projects }: ProjectShowcase3DProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    const time = state.clock.elapsedTime;
    
    // Subtle rotation
    groupRef.current.rotation.y = time * 0.05;
    
    // Individual project animations
    groupRef.current.children.forEach((child, index) => {
      if (child instanceof THREE.Group) {
        const isSelected = selectedProject === index;
        const isHovered = hoveredProject === index;
        
        // Scale animation
        const targetScale = isSelected ? 1.2 : isHovered ? 1.1 : 1;
        child.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        
        // Floating animation
        const offset = index * 0.5;
        child.position.y = Math.sin(time + offset) * 0.1;
        
        // Rotation for selected project
        if (isSelected) {
          child.rotation.y = time * 0.3;
        }
      }
    });
  });

  return (
    <group ref={groupRef}>
      {projects.map((project, index) => {
        const angle = (index / projects.length) * Math.PI * 2;
        const radius = 4;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <group
            key={project.title}
            position={[x, 0, z]}
            onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            onPointerEnter={() => setHoveredProject(index)}
            onPointerLeave={() => setHoveredProject(null)}
          >
            {/* Main project cube */}
            <RoundedBox args={[2, 2, 2]} radius={0.1} smoothness={4}>
              <meshStandardMaterial
                color={project.color}
                emissive={project.color}
                emissiveIntensity={hoveredProject === index ? 0.2 : 0.05}
                metalness={0.8}
                roughness={0.2}
                transparent
                opacity={0.8}
              />
            </RoundedBox>
            
            {/* Project title */}
            <Text
              position={[0, 1.5, 0]}
              fontSize={0.2}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
              maxWidth={3}
            >
              {project.title}
            </Text>
            
            {/* Tech stack indicators */}
            {project.tech.slice(0, 3).map((tech, techIndex) => (
              <mesh
                key={tech}
                position={[
                  (techIndex - 1) * 0.8,
                  -1.5,
                  0.5
                ]}
              >
                <boxGeometry args={[0.6, 0.2, 0.1]} />
                <meshBasicMaterial
                  color={project.color}
                  transparent
                  opacity={0.6}
                />
              </mesh>
            ))}
            
            {/* Expanded details for selected project */}
            {selectedProject === index && (
              <Html
                position={[0, 0, 1.5]}
                center
                distanceFactor={15}
                style={{
                  background: 'rgba(0, 0, 0, 0.8)',
                  padding: '20px',
                  borderRadius: '10px',
                  border: `1px solid ${project.color}`,
                  color: 'white',
                  width: '300px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', color: project.color }}>
                    {project.title}
                  </h3>
                  <p style={{ margin: '0 0 15px 0', fontSize: '14px' }}>
                    {project.description}
                  </p>
                  <div>
                    <strong style={{ color: project.color }}>Tech Stack:</strong>
                    <div style={{ marginTop: '5px' }}>
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          style={{
                            display: 'inline-block',
                            background: project.color + '20',
                            border: `1px solid ${project.color}`,
                            padding: '2px 8px',
                            margin: '2px',
                            borderRadius: '4px',
                            fontSize: '12px'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Html>
            )}
            
            {/* Connecting particles */}
            {Array.from({ length: 12 }).map((_, i) => {
              const particleAngle = (i / 12) * Math.PI * 2;
              const particleRadius = 1.5;
              return (
                <mesh
                  key={i}
                  position={[
                    Math.cos(particleAngle) * particleRadius,
                    0,
                    Math.sin(particleAngle) * particleRadius
                  ]}
                >
                  <sphereGeometry args={[0.02, 8, 8]} />
                  <meshBasicMaterial
                    color={project.color}
                    transparent
                    opacity={selectedProject === index ? 0.8 : 0.3}
                  />
                </mesh>
              );
            })}
          </group>
        );
      })}
    </group>
  );
};