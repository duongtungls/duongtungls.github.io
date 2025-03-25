'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, Grid } from '@react-three/drei';
import { useRef, useEffect, useState, Suspense } from 'react';
import * as THREE from 'three';

// Simplified model with progressively loading capabilities
const RunningModel = ({ modelPath }: { modelPath: string }) => {
  const group = useRef<THREE.Group>(null);
  const [animationName, setAnimationName] = useState<string | null>(null);

  // Load the model with useGLTF
  const { scene, animations } = useGLTF(modelPath);
  // Set up animations
  const { actions } = useAnimations(animations, group);

  // Play the first animation on component mount
  useEffect(() => {
    try {
      // Make sure we have animations and actions before proceeding
      if (animations?.length > 0 && actions) {
        const availableActions = Object.keys(actions);
        // Use the second animation if available, otherwise use the first one
        const animName = availableActions.length > 1 ? availableActions[1] : availableActions[0];

        if (animName && actions[animName]) {
          // Play the animation and store the name for cleanup
          actions[animName].reset().fadeIn(0.5).play();
          setAnimationName(animName);
        }
      }

      return () => {
        // Safe cleanup of animations when component unmounts
        if (animationName && actions && actions[animationName]) {
          actions[animationName].fadeOut(0.5);
        }
      };
    } catch (error) {
      console.error('Error setting up model animation:', error);
    }
  }, [actions, animationName, animations]);

  return (
    <group ref={group} position={[0, -2, 0]} scale={1.5}>
      <primitive object={scene} />
    </group>
  );
};

// Simpler version of MovingGrid for better performance
const MovingGrid = () => {
  const [offset, setOffset] = useState(0);
  const MOVEMENT_SPEED = 1.5; // Reduced from 2
  const RESET_THRESHOLD = -100;

  // Update grid position on each frame
  useFrame((state, delta) => {
    // Increase offset to simulate forward movement
    setOffset(prevOffset => {
      const newOffset = prevOffset - delta * MOVEMENT_SPEED;
      // Reset the position when we reach the threshold
      return newOffset <= RESET_THRESHOLD ? 0 : newOffset;
    });
  });

  return (
    <Grid
      position={[0, -2, offset]} // Apply the offset to z position
      args={[10, 10]}
      cellSize={1}
      cellThickness={0.5}
      cellColor="#6f6f6f"
      sectionSize={3}
      sectionThickness={1}
      sectionColor="#9d4b4b"
      fadeDistance={30}
      infiniteGrid={true}
    />
  );
};

export default function Background3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Cleanup
    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted) return null;

  return (
    <Canvas
      style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
      camera={{ position: [5, 2, 5], fov: 50 }}
      dpr={[1, 1.5]} // Limit pixel ratio for better performance
      performance={{ min: 0.5 }} // Allow performance optimizations
    >
      {/* Lighting setup for the model */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Replace static grid with moving grid */}
      <MovingGrid />

      {/* Wrap the model in Suspense to handle loading states */}
      <Suspense fallback={null}>
        <RunningModel modelPath="/hero/compressed_tung-running.glb" />
      </Suspense>

      {/* Camera controls with rotation enabled */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}

// Pre-load the model to improve performance
useGLTF.preload('/hero/compressed_tung-running.glb');
