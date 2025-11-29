import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface ShapeProps {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
  distort?: number;
  shape?: 'sphere' | 'torus' | 'octahedron' | 'icosahedron';
  scrollOffset?: number;
  mousePosition?: { x: number; y: number };
}

function FloatingShape({ 
  position, 
  color, 
  scale = 1, 
  speed = 1,
  distort = 0.3,
  shape = 'sphere',
  scrollOffset = 0,
  mousePosition = { x: 0, y: 0 }
}: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPosition = useRef(position);

  useFrame((state) => {
    if (meshRef.current) {
      // Base rotation - very subtle scroll influence
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 * speed + scrollOffset * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed + scrollOffset * 0.4;
      
      // Scroll-based position offset - much slower
      const scrollY = scrollOffset * 0.3;
      meshRef.current.position.y = initialPosition.current[1] - scrollY * speed;
      
      // Mouse-based subtle movement
      meshRef.current.position.x = initialPosition.current[0] + mousePosition.x * 0.3 * speed;
      meshRef.current.position.z = initialPosition.current[2] + mousePosition.y * 0.15;
      
      // Scale pulse based on scroll - gentler
      const scalePulse = 1 + Math.sin(scrollOffset * 2) * 0.05;
      meshRef.current.scale.setScalar(scale * scalePulse);
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
    <Float speed={speed * 0.5} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {getGeometry()}
        <MeshDistortMaterial
          color={color}
          envMapIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          distort={distort + scrollOffset * 0.05}
          speed={2 + scrollOffset * 0.5}
        />
      </mesh>
    </Float>
  );
}

function FloatingShapes({ scrollOffset, mousePosition }: { scrollOffset: number; mousePosition: { x: number; y: number } }) {
  return (
    <>
      <FloatingShape 
        position={[-3, 1, -2]} 
        color="#00d4aa" 
        scale={0.8} 
        speed={1.2}
        distort={0.4}
        shape="sphere"
        scrollOffset={scrollOffset}
        mousePosition={mousePosition}
      />
      <FloatingShape 
        position={[3.5, -0.5, -3]} 
        color="#a855f7" 
        scale={0.6} 
        speed={0.8}
        distort={0.3}
        shape="octahedron"
        scrollOffset={scrollOffset}
        mousePosition={mousePosition}
      />
      <FloatingShape 
        position={[0, 2, -4]} 
        color="#00d4aa" 
        scale={0.4} 
        speed={1.5}
        distort={0.2}
        shape="icosahedron"
        scrollOffset={scrollOffset}
        mousePosition={mousePosition}
      />
      <FloatingShape 
        position={[-2, -1.5, -2]} 
        color="#a855f7" 
        scale={0.5} 
        speed={1}
        distort={0.35}
        shape="torus"
        scrollOffset={scrollOffset}
        mousePosition={mousePosition}
      />
      <FloatingShape 
        position={[2, 1.5, -1]} 
        color="#00d4aa" 
        scale={0.3} 
        speed={1.8}
        distort={0.25}
        shape="sphere"
        scrollOffset={scrollOffset}
        mousePosition={mousePosition}
      />
      <FloatingShape 
        position={[-1, 3, -5]} 
        color="#a855f7" 
        scale={0.7} 
        speed={0.6}
        distort={0.3}
        shape="icosahedron"
        scrollOffset={scrollOffset}
        mousePosition={mousePosition}
      />
      <FloatingShape 
        position={[4, 2, -4]} 
        color="#00d4aa" 
        scale={0.35} 
        speed={1.3}
        distort={0.28}
        shape="octahedron"
        scrollOffset={scrollOffset}
        mousePosition={mousePosition}
      />
    </>
  );
}

function CameraController({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const { camera } = useThree();
  
  useFrame(() => {
    // Very subtle camera movement based on mouse
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mousePosition.x * 0.2, 0.02);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mousePosition.y * 0.15, 0.02);
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

export default function Scene3D() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
      setScrollOffset(scrollProgress);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0" style={{ zIndex: 0 }}>
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
        <CameraController mousePosition={mousePosition} />
        <FloatingShapes scrollOffset={scrollOffset} mousePosition={mousePosition} />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
