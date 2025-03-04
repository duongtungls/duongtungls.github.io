'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, Grid } from '@react-three/drei';
import { useRef, useEffect, useState, Suspense } from 'react';
import * as THREE from 'three';

// Model component that loads and animates the GLB file
const RunningModel = ({ modelPath }) => {
  const group = useRef();
  const [animationName, setAnimationName] = useState(null);

  // Load the model with useGLTF
  const { scene, animations } = useGLTF(modelPath);
  // Set up animations
  const { actions, mixer } = useAnimations(animations, group);

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
  }, [actions, animations]);

  return (
    <group ref={group} position={[0, -2, 0]} scale={1.5}>
      <primitive object={scene} />
    </group>
  );
};

// Moving Grid component that creates the running illusion
const MovingGrid = () => {
  const [offset, setOffset] = useState(0);
  const MOVEMENT_SPEED = 2;
  const RESET_THRESHOLD = -100; // Reset when we move 1 unit

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
  return (
    <Canvas
      style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
      camera={{ position: [5, 2, 5], fov: 50 }}
    >
      {/* Lighting setup for the model */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Replace static grid with moving grid */}
      <MovingGrid />

      {/* Wrap the model in Suspense to handle loading states */}
      <Suspense fallback={null}>
        <RunningModel modelPath="/hero/tung-running.glb" />
      </Suspense>

      {/* Camera controls with rotation enabled */}
      <OrbitControls
        enableZoom={false}
        enablePan={true}
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
useGLTF.preload('/hero/tung-running.glb');
