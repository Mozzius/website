import { useFrame, Canvas, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
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
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const findWidth = () =>
      setWidth(typeof window !== "undefined" ? window.innerWidth : 0);

    window.addEventListener("resize", findWidth);
    return () => window.removeEventListener("resize", findWidth);
  }, []);

  return <p>Your window is {width}px wide</p>;
};

const DemoCanvas: React.FC = ({ children }) => {
  return (
    <div className={classes.canvas}>
      <Canvas dpr={typeof window !== "undefined" ? window.devicePixelRatio : 1}>
        {children}
      </Canvas>
    </div>
  );
};

const lerper = new Vector3();

const SpinningCubeInner = () => {
  const ref = useRef<Mesh>(null!);
  const { viewport } = useThree();
  const [hovering, setHovering] = useState(false);

  useFrame(({ mouse, clock }) => {
    ref.current.rotation.y += Math.sin(clock.getElapsedTime()) / 20;
    ref.current.rotation.x += Math.cos(clock.getElapsedTime()) / 20;
    ref.current.rotation.z += Math.sin(clock.getElapsedTime()) / 20;

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
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="#ff7c94" />
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
