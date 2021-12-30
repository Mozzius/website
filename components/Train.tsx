import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

import Model from "./models/Carriage";

const SIZE = 10;
const DISTANCE = 100;

interface Props {
  index: number;
}

const Carriage = ({ index }: Props) => {
  const ref = useRef<Group>(null!);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.01 * index;
    // ref.current.position.x += delta * 0.1;
    // if (ref.current.position.x > DISTANCE) {
    //   ref.current.position.x = -DISTANCE;
    // }
  });

  return (
    <group ref={ref} position-x={-index}>
      <Model />
    </group>
  );
};

const Train = () => {
  return (
    <group>
      {Array.from({ length: 20 }, (_, i) => {
        <Model />;
      })}
    </group>
  );
};

export default Train;
