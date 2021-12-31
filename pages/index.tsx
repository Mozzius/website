import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import type { NextPage } from "next";
import Head from "next/head";

import LitText from "../components/LitText";

import classes from "../styles/Home.module.scss";
import cls from "../utils/cls";

const Intro = () => {
  const viewport = useThree((three) => three.viewport);
  return (
    <Scroll>
      <LitText position={[0, viewport.height * 0, 0]}>SAMUEL NEWMAN</LitText>
      <LitText position={[0, viewport.height * -1, 0]} center>
        ABOUT ME
      </LitText>
      <LitText position={[0, viewport.height * -3, 0]} center>
        CONTACT
      </LitText>
    </Scroll>
  );
};

const IntroContent = () => {
  return (
    <Scroll html>
      <section className={classes.about}>
        <div className={classes.left}>
          {"I'm"} Samuel, a Senior Frontend Developer based in the UK
        </div>
        <div className={classes.right}>
          I recently graduated First Class with Honours from the University of
          Kent, obtaining a Bachelors degree in Computer Science
        </div>
        <div className={classes.middle}>
          {"I'm"} currently working at Codesigned Ltd on a variety of web and
          app projects
        </div>
      </section>
      <section className={classes.contact}>
        <div className={cls(classes.middle, classes.center)}>
          <p>Talk to me</p>
          <a href="mailto:samuel@felixnewman.com">samuel@felixnewman.com</a>
        </div>
      </section>
    </Scroll>
  );
};

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
        >
          <ScrollControls pages={5}>
            <Intro />
            <IntroContent />
          </ScrollControls>
          <color attach="background" args={["black"]} />
        </Canvas>
      </div>
    </>
  );
};

export default Home;
