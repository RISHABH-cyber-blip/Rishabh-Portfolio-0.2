"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function FloatingShapes() {
  const group = useRef<THREE.Group>(null!);
  const { viewport, pointer } = useThree();
  const target = useRef({ x: 0, y: 0 });

  const shapes = useMemo(() => {
    const geos = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(0.9, 0),
      new THREE.TorusGeometry(0.7, 0.22, 8, 40),
      new THREE.TetrahedronGeometry(1, 0),
    ];
    return Array.from({ length: 14 }, (_, i) => ({
      geo: geos[i % geos.length],
      color: i % 2 === 0 ? "#00E5FF" : "#7C5CFF",
      position: [
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10 - 2,
      ] as [number, number, number],
      scale: 0.5 + Math.random() * 1.1,
      speed: 0.1 + Math.random() * 0.3,
    }));
  }, []);

  useFrame(() => {
    if (!group.current) return;
    target.current.x += (pointer.y * 0.3 - target.current.x) * 0.03;
    target.current.y += (pointer.x * 0.3 - target.current.y) * 0.03;
    group.current.rotation.x = target.current.x;
    group.current.rotation.y = target.current.y;
    group.current.children.forEach((mesh, i) => {
      mesh.rotation.x += shapes[i].speed * 0.005;
      mesh.rotation.y += shapes[i].speed * 0.007;
    });
  });

  return (
    <group ref={group}>
      {shapes.map((s, i) => (
        <mesh key={i} geometry={s.geo} position={s.position} scale={s.scale}>
          <meshBasicMaterial color={s.color} wireframe transparent opacity={0.35} />
        </mesh>
      ))}
    </group>
  );
}

function Particles() {
  const points = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const count = 400;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    return arr;
  }, []);

  useFrame(() => {
    if (points.current) points.current.rotation.y += 0.0004;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#66f5ec" size={0.035} transparent opacity={0.5} />
    </points>
  );
}

// Fixed, full-viewport, transparent 3D canvas that sits behind all page content
// and reacts to mouse position via the pointer-based parallax in FloatingShapes.
export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 9], fov: 55 }} dpr={[1, 2]}>
        <FloatingShapes />
        <Particles />
      </Canvas>
    </div>
  );
}
