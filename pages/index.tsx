import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import Head from "next/head";

import Name from "../components/Name";

import classes from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Samuel Newman - Senior Frontend Developer</title>
        <meta
          name="description"
          content="My personal site, a showcase of sorts"
        />
      </Head>
      <div className={classes.container}>
        <Canvas
          className={classes.canvas}
          dpr={typeof window !== "undefined" ? window.devicePixelRatio : 1}
          camera={{ fov: 30 }}
          shadows
        >
          <Name />
          <color attach="background" args={["black"]} />
        </Canvas>
      </div>
    </>
  );
};

export default Home;
