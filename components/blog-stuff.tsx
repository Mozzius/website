import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useInView } from "react-intersection-observer";
import { Mesh, Vector3 } from "three";

import classes from "../styles/Blog.module.scss";

export const AlertButton = () => {
  return (
    <button onClick={() => alert("You clicked the button!")}>Click Me!</button>
  );
};

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        onClick={() => setCounter(counter + 1)}
        style={{ marginRight: 10 }}
      >
        Click Me!
      </button>
      I have been clicked {counter} times
    </div>
  );
};

export const WindowWidth = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const findWidth = () =>
      setWidth(typeof window !== "undefined" ? window.innerWidth : 0);

    window.addEventListener("resize", findWidth);
    return () => window.removeEventListener("resize", findWidth);
  }, []);

  return <p>Your window is {width}px wide</p>;
};

const DemoCanvas: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={classes.canvas}>
      {inView && (
        <Canvas
          dpr={typeof window !== "undefined" ? window.devicePixelRatio : 1}
        >
          {children}
        </Canvas>
      )}
    </div>
  );
};

const lerper = new Vector3();

const SpinningCubeInner = () => {
  const ref = useRef<Mesh>(null!);
  const [hovering, setHovering] = useState(false);

  useFrame(({ mouse, clock, viewport }) => {
    ref.current.rotation.set(
      Math.sin(clock.getElapsedTime()),
      Math.cos(clock.getElapsedTime()),
      Math.sin(clock.getElapsedTime()),
    );

    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;

    hovering ? lerper.set(x, y, 0) : lerper.set(0, 0, 0);

    ref.current.position.lerp(lerper, hovering ? 0.3 : 0.1);
  });

  return (
    <mesh
      ref={ref}
      scale={2}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => setHovering(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ff7c94" />
    </mesh>
  );
};

export const SpinningCube = () => {
  return (
    <DemoCanvas>
      <SpinningCubeInner />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </DemoCanvas>
  );
};

export const BoringCube = () => {
  return (
    <DemoCanvas>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#ff7c94" />
      </mesh>
    </DemoCanvas>
  );
};

export const SlightlyLessBoringCube = () => {
  return (
    <DemoCanvas>
      <mesh scale={2} rotation={[1, 1, 1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ff7c94" />
      </mesh>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </DemoCanvas>
  );
};

// https://css-tricks.com/snippets/javascript/random-hex-color/
const randomColour = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const ToggleCube = () => {
  const [colour, setColour] = useState(randomColour);

  const onChangeColour = () => setColour(randomColour);

  return (
    <DemoCanvas>
      <mesh scale={2} rotation={[1, 1, 1]} onClick={onChangeColour}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={colour} />
      </mesh>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </DemoCanvas>
  );
};

const BasicSpinningCubeInner = () => {
  const cubeRef = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    cubeRef.current.rotation.x += delta;
    cubeRef.current.rotation.y += delta;
    cubeRef.current.rotation.z += delta;
  });

  return (
    <mesh ref={cubeRef} scale={2}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ff7c94" />
    </mesh>
  );
};

export const BasicSpinningCube = () => {
  return (
    <DemoCanvas>
      <BasicSpinningCubeInner />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </DemoCanvas>
  );
};
