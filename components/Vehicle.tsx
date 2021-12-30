import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import { Group } from "three";

import {
  Ambulance,
  DeliveryVan,
  FireTruck,
  Hatchback,
  LuxurySUV,
  PoliceCar,
  SportsSedan,
  Van,
  Taxi,
} from "./models";

export const DISTANCE = 200;

const positionLookup = {
  left: -1.5,
  right: 1.5,
} as const;

const rotationLookup = {
  left: Math.PI,
  right: 0,
} as const;

export type Vehicle =
  | "Ambulance"
  | "Delivery Van"
  | "Fire Truck"
  | "Hatchback"
  | "Luxury SUV"
  | "Police Car"
  | "Sports Sedan"
  | "Van"
  | "Taxi";

interface Props {
  type: Vehicle;
  startingPosition?: number;
  direction: "left" | "right";
}

const Vehicle = ({ type, startingPosition = 0, direction }: Props) => {
  const ref = useRef<Group>(null!);

  const Model = useMemo(() => {
    switch (type) {
      case "Ambulance":
        return Ambulance;
      case "Delivery Van":
        return DeliveryVan;
      case "Fire Truck":
        return FireTruck;
      case "Hatchback":
        return Hatchback;
      case "Luxury SUV":
        return LuxurySUV;
      case "Police Car":
        return PoliceCar;
      case "Sports Sedan":
        return SportsSedan;
      case "Van":
        return Van;
      case "Taxi":
        return Taxi;
    }
  }, [type]);

  useFrame((_, delta) => {
    if (direction === "right") {
      ref.current.position.z += delta * 10;
      if (ref.current.position.z > DISTANCE / 2) {
        ref.current.position.z = -DISTANCE / 2;
      }
    } else {
      ref.current.position.z -= delta * 10;
      if (ref.current.position.z < -DISTANCE / 2) {
        ref.current.position.z = DISTANCE / 2;
      }
    }
  });

  return (
    <group
      ref={ref}
      position-z={startingPosition * DISTANCE - DISTANCE / 2}
      position-x={positionLookup[direction]}
      rotation-y={rotationLookup[direction]}
    >
      <Model />
    </group>
  );
};

export default Vehicle;

const vehicles: Vehicle[] = [
  "Hatchback",
  "Luxury SUV",
  "Van",
  "Taxi",
];

export const RandomVehicle = (props: Omit<Props, "type">) => {
  const [type] = useState<Vehicle>(vehicles[Math.floor(Math.random() * 4)]);

  return <Vehicle type={type} {...props} />;
};
