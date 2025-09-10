import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

interface ExperienceOrbProps {
  position: [number, number, number];
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  color: string;
  scale?: number;
}

export const ExperienceOrb = ({ 
  position, 
  company, 
  role, 
  duration, 
  location, 
  description, 
  color,
  scale = 1 
}: ExperienceOrbProps) => {
  const orbRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      orbRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <group position={position}>
      {/* Main Experience Orb */}
      <Sphere ref={orbRef} args={[0.8 * scale, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </Sphere>

      {/* Inner glow */}
      <Sphere args={[0.6 * scale, 16, 16]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.4}
        />
      </Sphere>

      {/* Company Text */}
      <Text
        ref={textRef}
        position={[0, 1.5 * scale, 0]}
        fontSize={0.3 * scale}
        maxWidth={4}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        {company}
        <meshStandardMaterial attach="material" color="white" />
      </Text>

      {/* Role Text */}
      <Text
        position={[0, 1.1 * scale, 0]}
        fontSize={0.2 * scale}
        maxWidth={4}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        {role}
        <meshStandardMaterial attach="material" color="#cccccc" />
      </Text>

      {/* Duration Text */}
      <Text
        position={[0, 0.8 * scale, 0]}
        fontSize={0.15 * scale}
        maxWidth={4}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        {duration}
        <meshStandardMaterial attach="material" color="#aaaaaa" />
      </Text>

      {/* Location Text */}
      <Text
        position={[0, 0.5 * scale, 0]}
        fontSize={0.12 * scale}
        maxWidth={4}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        {location}
        <meshStandardMaterial attach="material" color="#888888" />
      </Text>

      {/* Floating particles around orb */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 1.2 * scale;
        return (
          <Sphere
            key={i}
            args={[0.02, 8, 8]}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 0.5) * 0.3,
              Math.sin(angle) * radius
            ]}
          >
            <meshBasicMaterial color={color} transparent opacity={0.6} />
          </Sphere>
        );
      })}
    </group>
  );
};