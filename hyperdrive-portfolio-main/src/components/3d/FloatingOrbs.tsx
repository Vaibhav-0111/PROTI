import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingOrbs = () => {
  const group = useRef<THREE.Group>(null);
  const orb1 = useRef<THREE.Mesh>(null);
  const orb2 = useRef<THREE.Mesh>(null);
  const orb3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (group.current) {
      group.current.rotation.y = time * 0.1;
    }
    
    if (orb1.current) {
      orb1.current.position.x = Math.sin(time * 0.5) * 3;
      orb1.current.position.y = Math.cos(time * 0.3) * 2;
      orb1.current.rotation.x = time * 0.2;
      orb1.current.rotation.y = time * 0.3;
    }
    
    if (orb2.current) {
      orb2.current.position.x = Math.cos(time * 0.4) * 4;
      orb2.current.position.z = Math.sin(time * 0.6) * 3;
      orb2.current.rotation.x = time * 0.15;
      orb2.current.rotation.z = time * 0.25;
    }
    
    if (orb3.current) {
      orb3.current.position.y = Math.sin(time * 0.7) * 2.5;
      orb3.current.position.z = Math.cos(time * 0.4) * 2;
      orb3.current.rotation.y = time * 0.4;
      orb3.current.rotation.z = time * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Sphere ref={orb1} args={[0.8, 64, 64]} position={[3, 0, -2]}>
        <MeshDistortMaterial
          color="#ff6b9d"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive="#ff6b9d"
          emissiveIntensity={0.1}
        />
      </Sphere>
      
      <Sphere ref={orb2} args={[0.6, 64, 64]} position={[-4, 1, 1]}>
        <MeshDistortMaterial
          color="#64ffda"
          attach="material"
          distort={0.6}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          emissive="#64ffda"
          emissiveIntensity={0.15}
        />
      </Sphere>
      
      <Sphere ref={orb3} args={[0.4, 64, 64]} position={[0, -2, 3]}>
        <MeshDistortMaterial
          color="#a855f7"
          attach="material"
          distort={0.8}
          speed={3}
          roughness={0.3}
          metalness={0.7}
          emissive="#a855f7"
          emissiveIntensity={0.2}
        />
      </Sphere>
    </group>
  );
};