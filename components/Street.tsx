import { GroupProps } from "@react-three/fiber";

import Road from "./Road";
import { RandomVehicle } from "./Vehicle";

const Street = (props: GroupProps) => {
  return (
    <group {...props}>
      <Road />
      {Array.from({ length: 20 }).map((_, i) => (
        <RandomVehicle direction="left" startingPosition={(i / 20) + (Math.random() - 0.5) * 0.01} key={i} />
      ))}
      {Array.from({ length: 20 }).map((_, i) => (
        <RandomVehicle direction="right" startingPosition={i / 20} key={i} />
      ))}
    </group>
  );
};

export default Street;
