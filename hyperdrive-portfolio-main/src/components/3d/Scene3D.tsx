import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { FloatingCube } from './FloatingCube';
import { EnhancedParticleField } from './EnhancedParticleField';
import { FloatingOrbs } from './FloatingOrbs';

interface Scene3DProps {
  enableControls?: boolean;
  cameraPosition?: [number, number, number];
}

export const Scene3D = ({ enableControls = false, cameraPosition = [0, 0, 5] }: Scene3DProps) => {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={cameraPosition} fov={75} />
      
      {enableControls && <OrbitControls enablePan={false} enableZoom={false} />}
      
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
      
      <Environment preset="night" />
      
      <FloatingCube />
      <EnhancedParticleField count={2000} interactive={true} />
      <FloatingOrbs />
    </Canvas>
  );
};