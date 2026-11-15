import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { Group } from "three";

function Emblem({ gold }: { gold: string }) {
  const group = useRef<Group>(null);
  const started = useRef<number | null>(null);
  useFrame(() => {
    started.current ??= performance.now();
    const elapsed = (performance.now() - started.current) / 1000;
    if (!group.current) return;
    group.current.rotation.y = Math.sin(elapsed * 1.8) * 0.25;
    group.current.rotation.x = Math.cos(elapsed * 1.4) * 0.12;
    group.current.rotation.z = elapsed * 0.12;
  });
  return (
    <group ref={group}>
      <mesh>
        <torusGeometry args={[1.48, 0.018, 6, 80]} />
        <meshStandardMaterial color={gold} metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh rotation={[0.12, -0.15, 0]}>
        <torusGeometry args={[1.6, 0.009, 6, 80]} />
        <meshStandardMaterial color={gold} metalness={0.65} roughness={0.35} />
      </mesh>
    </group>
  );
}

export default function IntroScene({ gold, onReady }: { gold: string; onReady: () => void }) {
  return (
    <Canvas
      dpr={1}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener("webglcontextlost", onReady, { once: true });
        requestAnimationFrame(onReady);
      }}
      fallback={null}
      aria-hidden="true"
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 4, 5]} intensity={2.5} />
      <Environment resolution={32}>
        <Lightformer intensity={2} position={[0, 4, 3]} scale={[8, 4, 1]} />
        <Lightformer intensity={1} position={[-4, 0, 2]} scale={[2, 6, 1]} />
      </Environment>
      <Emblem gold={gold} />
    </Canvas>
  );
}