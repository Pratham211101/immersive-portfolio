import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

function FloatingShape({ 
  position, 
  color, 
  scale = 1, 
  speed = 1,
  distort = 0.3,
  shape = 'sphere'
}: { 
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
  distort?: number;
  shape?: 'sphere' | 'torus' | 'octahedron' | 'icosahedron';
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  const getGeometry = () => {
    switch (shape) {
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />;
      default:
        return <sphereGeometry args={[1, 64, 64]} />;
    }
  };

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {getGeometry()}
        <MeshDistortMaterial
          color={color}
          envMapIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          distort={distort}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function FloatingShapes() {
  return (
    <>
      <FloatingShape 
        position={[-3, 1, -2]} 
        color="#00d4aa" 
        scale={0.8} 
        speed={1.2}
        distort={0.4}
        shape="sphere"
      />
      <FloatingShape 
        position={[3.5, -0.5, -3]} 
        color="#a855f7" 
        scale={0.6} 
        speed={0.8}
        distort={0.3}
        shape="octahedron"
      />
      <FloatingShape 
        position={[0, 2, -4]} 
        color="#00d4aa" 
        scale={0.4} 
        speed={1.5}
        distort={0.2}
        shape="icosahedron"
      />
      <FloatingShape 
        position={[-2, -1.5, -2]} 
        color="#a855f7" 
        scale={0.5} 
        speed={1}
        distort={0.35}
        shape="torus"
      />
      <FloatingShape 
        position={[2, 1.5, -1]} 
        color="#00d4aa" 
        scale={0.3} 
        speed={1.8}
        distort={0.25}
        shape="sphere"
      />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d4aa" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#ffffff"
        />
        <FloatingShapes />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
