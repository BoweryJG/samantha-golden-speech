import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Float, Text } from '@react-three/drei';
import * as THREE from 'three';
import { Box } from '@mui/material';

function WaveForm({ color = '#EC4899' }: { color?: string }) {
  const ref = useRef<THREE.Group>(null);
  
  // Create dynamic wave points - reduce segments for mobile
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = window.innerWidth < 768 ? 50 : 100;
    
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * 10 - 5;
      const y = 0;
      const z = 0;
      pts.push(new THREE.Vector3(x, y, z));
    }
    
    return pts;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.elapsedTime;
      const isMobile = window.innerWidth < 768;
      const segments = isMobile ? 50 : 100;
      
      // Reduce update frequency on mobile
      if (isMobile && Math.floor(time * 30) % 2 !== 0) return;
      
      // Update wave points dynamically
      ref.current.children.forEach((child, index) => {
        if (child instanceof THREE.Line) {
          const positions = (child.geometry as THREE.BufferGeometry).attributes.position;
          
          for (let i = 0; i <= segments; i++) {
            const x = (i / segments) * 10 - 5;
            const frequency = 0.5 + Math.sin(time * 0.5 + i * 0.1) * 0.3;
            const amplitude = Math.sin(x * frequency + time * 2) * 0.5;
            
            // Reduce complexity on mobile
            if (!isMobile) {
              const additionalWave = Math.sin(x * 2 + time * 3) * 0.2;
              const microWave = Math.sin(x * 8 + time * 5) * 0.1;
              positions.setY(i, amplitude + additionalWave + microWave + index * 0.3);
            } else {
              positions.setY(i, amplitude + index * 0.3);
            }
          }
          
          positions.needsUpdate = true;
        }
      });
      
      ref.current.rotation.y = Math.sin(time * 0.3) * 0.1;
    }
  });

  return (
    <group ref={ref}>
      {/* Multiple wave layers for depth - reduce on mobile */}
      {(window.innerWidth < 768 ? [0, 1] : [0, 1, 2]).map((index) => (
        <Line
          key={index}
          points={points}
          color={color}
          lineWidth={3 - index * 0.5}
          transparent
          opacity={0.8 - index * 0.2}
        />
      ))}
    </group>
  );
}

function FloatingWords() {
  const words = window.innerWidth < 768 
    ? ['Voice', 'Growth', 'Progress'] // Fewer words on mobile
    : ['Communication', 'Growth', 'Voice', 'Connection', 'Progress'];
  
  return (
    <>
      {words.map((word, index) => (
        <Float
          key={word}
          speed={window.innerWidth < 768 ? 1 : 2}
          rotationIntensity={window.innerWidth < 768 ? 0.2 : 0.5}
          floatIntensity={window.innerWidth < 768 ? 0.5 : 1}
          position={[
            (index - Math.floor(words.length / 2)) * 2.5,
            Math.sin(index) * 0.5,
            -2 - (index % 2) * 0.5
          ]}
        >
          <Text
            fontSize={window.innerWidth < 768 ? 0.2 : 0.3}
            color="#9F7AEA"
            anchorX="center"
            anchorY="middle"
            transparent
            opacity={0.3}
          >
            {word}
          </Text>
        </Float>
      ))}
    </>
  );
}

const SoundWaveVisualization: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        
        {/* Main sound wave */}
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <WaveForm color="#EC4899" />
        </Float>
        
        {/* Background wave */}
        <group position={[0, 0, -2]} scale={[1.2, 0.6, 1]}>
          <WaveForm color="#6B46C1" />
        </group>
        
        {/* Floating words */}
        <FloatingWords />
        
        {/* Particle effect */}
        <Points />
      </Canvas>
    </Box>
  );
};

function Points() {
  const ref = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    const particleCount = window.innerWidth < 768 ? 100 : 200; // Fewer particles on mobile
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 6;
      const z = (Math.random() - 0.5) * 6;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
      
      // Pulse effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      ref.current.scale.setScalar(scale);
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#F687B3"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default SoundWaveVisualization;