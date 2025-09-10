import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, MeshDistortMaterial, Text } from '@react-three/drei';
import * as THREE from 'three';

interface HolographicCardProps {
  text: string;
  position: [number, number, number];
  color: string;
  delay?: number;
}

export const HolographicCard = ({ text, position, color, delay = 0 }: HolographicCardProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const time = state.clock.elapsedTime + delay;
    
    if (groupRef.current) {
      // Floating animation
      groupRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.3;
      groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.1;
      
      // Holographic shimmer effect
      if (textRef.current && textRef.current.material) {
        (textRef.current.material as any).emissiveIntensity = 0.2 + Math.sin(time * 2) * 0.1;
      }
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Background holographic panel */}
      <RoundedBox args={[2.5, 1, 0.1]} radius={0.1} smoothness={4} position={[0, 0, -0.2]}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.1}
          distort={0.2}
          speed={1}
          roughness={0.1}
          metalness={0.9}
        />
      </RoundedBox>
      
      {/* Glowing border */}
      <RoundedBox args={[2.6, 1.1, 0.05]} radius={0.1} smoothness={4} position={[0, 0, -0.25]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.3}
        />
      </RoundedBox>
      
      {/* 3D Text */}
      <Text
        ref={textRef}
        position={[0, -0.08, 0]}
        fontSize={0.15}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff"
      >
        {text}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </Text>
      
      {/* Particle effect around card */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * 1.5,
              Math.sin(angle) * 0.8,
              0.3
            ]}
          >
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial
              color={color}
              transparent
              opacity={0.6}
            />
          </mesh>
        );
      })}
    </group>
  );
};