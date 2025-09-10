import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface EnhancedParticleFieldProps {
  count?: number;
  size?: number;
  color?: string;
  speed?: number;
  interactive?: boolean;
}

export const EnhancedParticleField = ({ 
  count = 3000, 
  size = 0.015,
  color = "#64ffda",
  speed = 0.02,
  interactive = true
}: EnhancedParticleFieldProps) => {
  const ref = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
      
      // Velocity
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    
    return { positions, velocities };
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    
    const time = state.clock.elapsedTime;
    const positions = ref.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Base rotation
      ref.current.rotation.x = time * speed * 0.5;
      ref.current.rotation.y = time * speed;
      
      // Mouse interaction
      if (interactive) {
        const mouseX = mouse.x * viewport.width / 2;
        const mouseY = mouse.y * viewport.height / 2;
        
        const dx = positions[i3] - mouseX;
        const dy = positions[i3 + 1] - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 3) {
          const force = (3 - distance) / 3;
          positions[i3] += dx * force * 0.01;
          positions[i3 + 1] += dy * force * 0.01;
        }
      }
      
      // Wave motion
      positions[i3 + 1] += Math.sin(time + positions[i3] * 0.1) * 0.001;
      positions[i3 + 2] += Math.cos(time + positions[i3 + 1] * 0.1) * 0.001;
      
      // Boundary wrapping
      if (positions[i3] > 12.5) positions[i3] = -12.5;
      if (positions[i3] < -12.5) positions[i3] = 12.5;
      if (positions[i3 + 1] > 12.5) positions[i3 + 1] = -12.5;
      if (positions[i3 + 1] < -12.5) positions[i3 + 1] = 12.5;
      if (positions[i3 + 2] > 12.5) positions[i3 + 2] = -12.5;
      if (positions[i3 + 2] < -12.5) positions[i3 + 2] = 12.5;
    }
    
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={particlesPosition.positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};