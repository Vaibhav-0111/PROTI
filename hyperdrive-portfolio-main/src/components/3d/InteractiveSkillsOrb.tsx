import { useRef, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere, Text, Billboard } from '@react-three/drei';
import * as THREE from 'three';

interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'tools';
}

interface InteractiveSkillsOrbProps {
  skills: Skill[];
}

export const InteractiveSkillsOrb = ({ skills }: InteractiveSkillsOrbProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillPositions = useMemo(() => {
    return skills.map((_, index) => {
      const phi = Math.acos(-1 + (2 * index) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      const radius = 3;
      
      return [
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      ] as [number, number, number];
    });
  }, [skills]);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    const time = state.clock.elapsedTime;
    
    // Rotate the entire sphere slowly
    groupRef.current.rotation.y = time * 0.1;
    groupRef.current.rotation.x = Math.sin(time * 0.05) * 0.1;
    
    // Mouse interaction
    const mouseInfluence = 0.5;
    groupRef.current.rotation.y += mouse.x * mouseInfluence;
    groupRef.current.rotation.x += mouse.y * mouseInfluence;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'languages': return '#64ffda';
      case 'frameworks': return '#a855f7';
      case 'tools': return '#ff6b9d';
      default: return '#ffffff';
    }
  };

  return (
    <group ref={groupRef}>
      {/* Central core */}
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.1}
          transparent
          opacity={0.2}
          wireframe
        />
      </Sphere>
      
      {/* Skill nodes */}
      {skills.map((skill, index) => {
        const position = skillPositions[index];
        const isHovered = hoveredSkill === skill.name;
        const color = getCategoryColor(skill.category);
        
        return (
          <group key={skill.name} position={position}>
            {/* Skill sphere */}
            <Sphere 
              args={[0.1 + skill.level * 0.05, 16, 16]}
              onPointerEnter={() => setHoveredSkill(skill.name)}
              onPointerLeave={() => setHoveredSkill(null)}
            >
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={isHovered ? 0.3 : 0.1}
                metalness={0.8}
                roughness={0.2}
              />
            </Sphere>
            
            {/* Connecting line to center */}
            <mesh>
              <cylinderGeometry args={[0.005, 0.005, 3, 8]} />
              <meshBasicMaterial
                color={color}
                transparent
                opacity={0.3}
              />
            </mesh>
            
            {/* Skill label */}
            <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
              <Text
                position={[0, -0.3, 0]}
                fontSize={0.12}
                color={color}
                anchorX="center"
                anchorY="middle"
                visible={isHovered}
              >
                {skill.name}
              </Text>
              <Text
                position={[0, -0.45, 0]}
                fontSize={0.08}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
                visible={isHovered}
              >
                Level: {skill.level}/5
              </Text>
            </Billboard>
            
            {/* Orbital particles */}
            {isHovered && Array.from({ length: 6 }).map((_, i) => {
              const angle = (i / 6) * Math.PI * 2;
              return (
                <mesh
                  key={i}
                  position={[
                    Math.cos(angle) * 0.3,
                    Math.sin(angle) * 0.3,
                    0
                  ]}
                >
                  <sphereGeometry args={[0.02, 8, 8]} />
                  <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.8}
                  />
                </mesh>
              );
            })}
          </group>
        );
      })}
      
      {/* Category rings */}
      {['languages', 'frameworks', 'tools'].map((category, index) => (
        <mesh key={category} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2 + index * 0.5, 2.1 + index * 0.5, 64]} />
          <meshBasicMaterial
            color={getCategoryColor(category)}
            transparent
            opacity={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
};