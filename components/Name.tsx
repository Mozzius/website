import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

const Name = () => {
  const ref = useRef<Group>(null!);
  const light1 = useRef<Group>(null!);
  const light2 = useRef<Group>(null!);
  const light3 = useRef<Group>(null!);

  useFrame(({ clock }) => {
    light1.current.rotation.set(
      Math.cos(clock.getElapsedTime() + 100),
      Math.sin(clock.getElapsedTime() + 200),
      Math.sin(clock.getElapsedTime() + 300)
    );
    light2.current.rotation.set(
      Math.sin(clock.getElapsedTime() + 400),
      Math.cos(clock.getElapsedTime() + 500),
      Math.sin(clock.getElapsedTime() + 600)
    );
    light3.current.rotation.set(
      Math.sin(clock.getElapsedTime() + 700),
      Math.sin(clock.getElapsedTime() + 800),
      Math.cos(clock.getElapsedTime() + 900)
    );

    const screen = Math.min(window.innerWidth, window.innerHeight + 500);
    ref.current.position.z = -2000 / (screen || 1) + 4;
  });

  return (
    <group ref={ref}>
      <Text
        color="#000"
        outlineWidth={0.0025}
        outlineColor="#fff"
        fontSize={0.3}
        maxWidth={0.1}
        lineHeight={1}
        letterSpacing={0.02}
      >
        <meshPhongMaterial attach="material" color="#fff" />
        SAMUEL NEWMAN
      </Text>
      <group ref={light1}>
        <pointLight position={[0, 0, 0.5]} />
      </group>
      <group ref={light2}>
        <pointLight position={[0, 0, 0.5]} />
      </group>
      <group ref={light3}>
        <pointLight position={[0, 0, 0.5]} />
      </group>
    </group>
  );
};

export default Name;
