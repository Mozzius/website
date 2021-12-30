import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import Head from "next/head";

import Train from "../components/Train";

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
            camera={{ position: [0, 0, 10], fov: 30 }}
            onCreated={({ camera }) => camera.lookAt(0, 5, 0)}
          >
            <Suspense fallback={null}>
              <Train />
              <OrbitControls />
              <Environment
                files={
                  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/hdris/canary-wharf/canary_wharf_1k.hdr"
                }
              />
            </Suspense>
          </Canvas>
      </div>
    </>
  );
};

export default Home;
