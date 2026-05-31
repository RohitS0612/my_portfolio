"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const Particles = () => {
  const ref = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(2000 * 3);
    const cols = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      cols[i * 3] = 0.5;
      cols[i * 3 + 1] = 0.5;
      cols[i * 3 + 2] = 0.5;
    }
    return [pos, cols];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const { clock, mouse } = state;
      // Rotation based on time
      ref.current.rotation.y += 0.001;
      ref.current.rotation.x += 0.0005;

      // Mouse interaction: responsive drift
      const targetX = (mouse.x * 2);
      const targetY = (mouse.y * 2);
      ref.current.position.x += (targetX - ref.current.position.x) * 0.1;
      ref.current.position.y += (targetY - ref.current.position.y) * 0.1;
      
      // Subtle pulsing based on time
      const s = 1 + Math.sin(clock.getElapsedTime() * 0.5) * 0.05;
      ref.current.scale.set(s, s, s);
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const GeometricCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      const targetRotationX = (mouse.y * Math.PI) / 10;
      const targetRotationY = (mouse.x * Math.PI) / 10;
      meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshStandardMaterial 
        color="currentColor" 
        wireframe 
        transparent 
        opacity={0.15} 
      />
    </mesh>
  );
};

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Particles />
        <GeometricCore />
      </Canvas>
    </div>
  );
};
