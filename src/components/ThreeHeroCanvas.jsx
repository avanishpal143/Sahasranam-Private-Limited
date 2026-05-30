import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';

// Fallback HTML Animation in case WebGL is not supported
function GridFallback() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-teal-50/50 via-white to-sky-50/50 -z-10 energy-grid opacity-80">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(20, 184, 166, 0.08) 0%, transparent 60%)'
      }} />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 80% 70%, rgba(15, 118, 110, 0.08) 0%, transparent 50%)'
      }} />
      {/* Floating particles using CSS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary-light"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-slow ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * -10}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

// 3D Particles Grid representing the Electrification Grid
function ElectrificationGrid({ mouse }) {
  const pointsRef = useRef();
  const count = 120;
  
  // Create static positions and connections
  const [positions, connections] = useMemo(() => {
    const tempPositions = new Float32Array(count * 3);
    const tempConnections = [];
    
    // Generate grid points with slight random variation
    const gridSize = 10;
    const spacing = 1.6;
    let idx = 0;
    
    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        if (idx >= count) break;
        // Centralize around 0
        const posX = (x - gridSize / 2) * spacing + (Math.random() - 0.5) * 0.2;
        const posZ = (z - gridSize / 2) * spacing + (Math.random() - 0.5) * 0.2;
        const posY = -1.5 + (Math.sin(x * 0.5) * Math.cos(z * 0.5)) * 0.3;
        
        tempPositions[idx * 3] = posX;
        tempPositions[idx * 3 + 1] = posY;
        tempPositions[idx * 3 + 2] = posZ;
        
        // Link to adjacent grid points
        if (x > 0) tempConnections.push(idx - gridSize, idx);
        if (z > 0) tempConnections.push(idx - 1, idx);
        
        idx++;
      }
    }
    return [tempPositions, tempConnections];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const positionAttribute = pointsRef.current.geometry.attributes.position;
    
    for (let i = 0; i < count; i++) {
      const x = positions[i * 3];
      const z = positions[i * 3 + 2];
      
      // Calculate dynamic wave heights
      const yWave = Math.sin(time * 0.8 + x * 0.4 + z * 0.4) * 0.2;
      
      // Interaction with mouse pointer
      // Map pointer (-1 to 1) to screen space coords roughly
      const mx = mouse.x * 6;
      const mz = mouse.y * -6;
      const dist = Math.sqrt((x - mx) ** 2 + (z - mz) ** 2);
      
      let pushY = 0;
      if (dist < 3.5) {
        // repulse height based on closeness
        pushY = (3.5 - dist) * 0.25;
      }

      positionAttribute.setY(i, positions[i * 3 + 1] + yWave + pushY);
    }
    
    positionAttribute.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#14B8A6"
        size={0.18}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
      />
    </points>
  );
}

// Programmatic Wind Turbine representation
function WindTurbine({ position, scale = 1, rotationSpeed = 1 }) {
  const bladesRef = useRef();

  useFrame((state) => {
    if (bladesRef.current) {
      bladesRef.current.rotation.z += 0.015 * rotationSpeed;
    }
  });

  return (
    <group position={position} scale={[scale, scale, scale]}>
      {/* Tower pole */}
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.06, 0.12, 4, 8]} />
        <meshStandardMaterial color="#0F766E" roughness={0.4} metalness={0.2} />
      </mesh>
      
      {/* Turbine Nacelle/Hub */}
      <mesh position={[0, 4, 0.08]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.3, 8]} />
        <meshStandardMaterial color="#14B8A6" roughness={0.3} />
      </mesh>

      {/* Rotating Blades */}
      <group ref={bladesRef} position={[0, 4, 0.24]}>
        {/* Hub Cap */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#F59E0B" />
        </mesh>
        
        {/* Blade 1 */}
        <mesh position={[0, 0.7, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.08, 1.4, 0.015]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
        </mesh>
        
        {/* Blade 2 */}
        <mesh position={[-0.6, -0.35, 0]} rotation={[0, 0, (2 * Math.PI) / 3]}>
          <boxGeometry args={[0.08, 1.4, 0.015]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
        </mesh>
        
        {/* Blade 3 */}
        <mesh position={[0.6, -0.35, 0]} rotation={[0, 0, (-2 * Math.PI) / 3]}>
          <boxGeometry args={[0.08, 1.4, 0.015]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

// Programmatic Solar Panel Grid representation
function SolarGrid() {
  const panelCountX = 5;
  const panelCountZ = 3;
  const panels = [];

  for (let x = 0; x < panelCountX; x++) {
    for (let z = 0; z < panelCountZ; z++) {
      panels.push({
        id: `${x}-${z}`,
        position: [-6.5 + x * 0.9, -1.4, -4.5 + z * 0.9]
      });
    }
  }

  return (
    <group>
      {panels.map((p) => (
        <group key={p.id} position={p.position}>
          {/* Tilted frame */}
          <mesh rotation={[Math.PI / 6, 0, 0]}>
            <boxGeometry args={[0.7, 0.03, 0.5]} />
            <meshStandardMaterial color="#042F2E" roughness={0.2} metalness={0.7} />
          </mesh>
          {/* Support pole */}
          <mesh position={[0, -0.2, -0.1]}>
            <cylinderGeometry args={[0.015, 0.015, 0.4, 4]} />
            <meshStandardMaterial color="#0F766E" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Particle flow lines representing digital grid currents
function EnergyStream({ start, end, speed = 0.5, delay = 0 }) {
  const particleRef = useRef();
  const [progress, setProgress] = useState(0);

  useFrame((state) => {
    if (!particleRef.current) return;
    const time = state.clock.getElapsedTime();
    const currProgress = ((time * speed + delay) % 1.0);
    setProgress(currProgress);
    
    // Interpolate linear coordinates
    const x = THREE.MathUtils.lerp(start[0], end[0], currProgress);
    const y = THREE.MathUtils.lerp(start[1], end[1], currProgress);
    const z = THREE.MathUtils.lerp(start[2], end[2], currProgress);
    
    particleRef.current.position.set(x, y, z);
  });

  return (
    <group>
      {/* Light line pathway */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array([...start, ...end]), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#0F766E" transparent opacity={0.15} />
      </line>
      
      {/* Flow particle */}
      <mesh ref={particleRef}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshBasicMaterial color="#F59E0B" />
      </mesh>
    </group>
  );
}

// Scene controls and updates
function MainScene({ mouse }) {
  const { camera } = useThree();

  // Subtle camera parallax
  useFrame(() => {
    camera.position.x += (mouse.x * 2.5 - camera.position.x) * 0.05;
    camera.position.y += ((mouse.y * 1.5 + 4) - camera.position.y) * 0.05;
    camera.lookAt(0, -0.5, -1);
  });

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 20, 10]} intensity={1.5} color="#eff6ff" castShadow />
      <directionalLight position={[-10, 5, -10]} intensity={0.5} color="#e0f2fe" />
      
      <ElectrificationGrid mouse={mouse} />
      
      {/* Wind turbines grouped */}
      <WindTurbine position={[3.5, -1.5, -3.5]} scale={0.7} rotationSpeed={1.2} />
      <WindTurbine position={[5.2, -1.5, -5]} scale={0.5} rotationSpeed={0.9} />
      <WindTurbine position={[6.5, -1.5, -2.8]} scale={0.6} rotationSpeed={1.4} />

      {/* Solar Panel grid */}
      <SolarGrid />

      {/* Flowing Grid streams */}
      <EnergyStream start={[-6, -1.4, -4]} end={[0, -1.4, 0]} speed={0.4} />
      <EnergyStream start={[0, -1.4, 0]} end={[3.5, 2.5, -3.5]} speed={0.3} delay={0.3} />
      <EnergyStream start={[0, -1.4, 0]} end={[5.2, 2.5, -5]} speed={0.25} delay={0.6} />
      
      {/* Ground plane helper */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.52, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.9} opacity={0.3} transparent />
      </mesh>
    </>
  );
}

export default function ThreeHeroCanvas() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // WebGL support detection
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const supported = !!(window.WebGLRenderingContext && 
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      setHasWebGL(supported);
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  const handleMouseMove = (e) => {
    // Standardize coordinates from -1 to 1
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    setMouse({ x, y });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!hasWebGL) {
    return <GridFallback />;
  }

  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-transparent">
      <Canvas
        camera={{ position: [0, 4, 10], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <MainScene mouse={mouse} />
      </Canvas>
    </div>
  );
}
