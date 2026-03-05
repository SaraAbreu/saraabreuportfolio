import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function FlowNode({ position }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.25, 32, 32]} />
      <meshStandardMaterial color="#e11d48" emissive="#be123c" emissiveIntensity={0.7} />
    </mesh>
  );
}

function FlowConnection({ start, end }) {
  const points = [start, end];
  return (
    <line>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(points.flat())}
          count={points.length}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#e11d48" linewidth={2} />
    </line>
  );
}

function Flow3D() {
  // Ejemplo de nodos y conexiones
  const nodes = [
    [0, 0, 0],
    [1, 0.5, -0.5],
    [2, 0, 0.5],
    [3, -0.5, 0],
  ];
  const connections = [
    [nodes[0], nodes[1]],
    [nodes[1], nodes[2]],
    [nodes[2], nodes[3]],
  ];
  return (
    <Canvas style={{ height: 300, background: 'linear-gradient(90deg, #0f172a 60%, #be123c 100%)', borderRadius: '1rem' }} camera={{ position: [4, 2, 4], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        {nodes.map((pos, i) => <FlowNode key={i} position={pos} />)}
        {connections.map(([start, end], i) => <FlowConnection key={i} start={start} end={end} />)}
        <OrbitControls enablePan={false} enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}

export default Flow3D;
