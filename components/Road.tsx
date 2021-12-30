import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { RepeatWrapping, TextureLoader } from "three";

const Road = () => {
  const texture = useLoader(TextureLoader, "/road.jpg");

  useEffect(() => {
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(100, 1);
  }, [texture]);

  return (
    <mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6}>
      <meshBasicMaterial map={texture} />
      <planeBufferGeometry args={[100, 1]} />
    </mesh>
  );
};

export default Road;
