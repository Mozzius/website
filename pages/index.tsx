import { Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";
import { BsChevronCompactDown as ArrowDown } from "react-icons/bs";

import LitText from "../components/LitText";

import classes from "../styles/Home.module.scss";
import cls from "../utils/cls";

const Intro = () => {
  const viewport = useThree((three) => three.viewport);
  return (
    <Scroll>
      <LitText position={[0, viewport.height * 0, 0]} textAlign="left">
        SAMUEL NEWMAN
      </LitText>
      <LitText position={[0, viewport.height * -1, 0]} textAlign="center">
        ABOUT ME
      </LitText>
      <LitText position={[0, viewport.height * -3, 0]} textAlign="center">
        CONTACT
      </LitText>
    </Scroll>
  );
};

const IntroContent = () => {
  const scroll = useScroll();
  const ref = useRef<HTMLDivElement>(null!);

  useFrame(() => {
    ref.current.style.opacity = (1 - scroll.range(0, 0.25) * 4).toString();
  });

  return (
    <Scroll html>
      <div className={classes.arrow} ref={ref}>
        <div>
          <ArrowDown color="#fff" size={32} />
        </div>
        <p>Scroll...</p>
      </div>
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
          app projects.{" "}
          <Link href="/portfolio">
            <a>I also have a portfolio of personal projects.</a>
          </Link>
        </div>
      </section>
      <section className={classes.contact}>
        <div className={cls(classes.middle, classes.center)}>
          <p>Get in touch</p>
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
        <noscript>
          <p>
            Look at you, not using JavaScript. Unfortunately, this page is
            mostly a cool 3D WebGL experience, so you{"'"}ll need to enable
            JavaScript to see it.
          </p>
          <p>
            Alternatively, I can just describe it to you. It opens with {'"'}
            SAMUEL NEWMAN{'"'} (that{"'"}s me) in very large text. There{"'"}s a
            cool effect where you can only see the outlines of the letters, and
            three point lights are flying around it revealing the fill of the
            letters. It{"'"}s really cool and took a bunch of effort but if you
            really want to have JavaScript disabled then good for you. I{"'"}m
            not bitter.
          </p>
          <p>
            You can then scroll down. It says {"'"}ABOUT ME{"'"} with the same
            cool effect.
          </p>
          <p>It then says (in normal letters):</p>
          <p>
            {"I'm"} Samuel, a Senior Frontend Developer based in the UK.
            <br />I recently graduated First Class with Honours from the
            University of Kent, obtaining a Bachelors degree in Computer Science
            <br />
            {"I'm"} currently working at Codesigned Ltd on a variety of web and
            app projects
          </p>
          <p>
            One final flashy big text thing that says {'"'}CONTACT{'"'}, then it
            says:
          </p>
          <p>Get in touch</p>
          <a href="mailto:samuel@felixnewman.com">samuel@felixnewman.com</a>
        </noscript>
      </div>
    </>
  );
};

export default Home;
