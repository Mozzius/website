import { Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { useRef } from "react";
import { BsChevronCompactDown as ArrowDown } from "react-icons/bs";

import LitText from "../components/LitText";

import classes from "../styles/Home.module.scss";
import cls from "../utils/cls";
import Link from "next/link";

const Intro = () => {
  const viewport = useThree((three) => three.viewport);
  return (
    <Scroll>
      <LitText position={[0, viewport.height * 0, 0]} textAlign="left">
        SAMUEL NEWMAN
      </LitText>
      <LitText position={[0, viewport.height * -0.5, 0]} textAlign="center">
        ABOUT ME
      </LitText>
      <LitText position={[0, viewport.height * -2.5, 0]} textAlign="center">
        CONTACT
      </LitText>
    </Scroll>
  );
};

const IntroContent = ({ linkTo }: { linkTo: (evt: any) => void }) => {
  const scroll = useScroll();
  const ref = useRef<HTMLDivElement>(null!);

  useFrame(() => {
    ref.current.style.opacity = (1 - scroll.range(0, 0.25) * 4).toString();
  });

  return (
    <Scroll html>
      <div className={classes.arrow} ref={ref}>
        <p>Scroll...</p>
        <div>
          <ArrowDown color="#fff" size={32} />
        </div>
      </div>
      <section className={classes.about}>
        <div className={classes.left}>
          I&#39;m Samuel, a Senior Front-end Developer based in the UK. I have a
          passion for beautiful websites and beautiful code, and attempt to
          create both at the same time.
        </div>
        <div className={classes.right}>
          I recently graduated with First Class Honours from the University of
          Kent, obtaining a Bachelors degree in Computer Science. I specialised
          in the study of programming languages and type systems, creating a new
          one for my{" "}
          <a href="https://github.com/mozzius/lyre">
            dissertation research project
          </a>
          .
        </div>
        <div className={classes.middle}>
          I&#39;m currently working at Codesigned Ltd on a variety of web and
          app projects.{" "}
          <a onClick={linkTo}>I also have a portfolio of personal projects.</a>
        </div>
      </section>
      <section className={classes.contact}>
        <div className={cls(classes.middle, classes.center)}>
          <p>Get in touch</p>
          <p>
            <a href="mailto:samuel@felixnewman.com">samuel@felixnewman.com</a>
          </p>
        </div>
      </section>
    </Scroll>
  );
};

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Samuel Newman - Senior Front-end Developer</title>
      </Head>
      <div className={classes.container}>
        <Canvas
          className={classes.canvas}
          dpr={typeof window !== "undefined" ? window.devicePixelRatio : 1}
          camera={{ fov: 30 }}
        >
          <ScrollControls pages={4}>
            <Intro />
            <IntroContent
              linkTo={(evt: MouseEvent) => {
                evt.preventDefault();
                router.push("/portfolio");
              }}
            />
          </ScrollControls>
          <color attach="background" args={["black"]} />
        </Canvas>
        <noscript>
          <p>
            Look at you, not using JavaScript. Unfortunately, this page is
            mostly a cool 3D WebGL experience, so you&#39;ll need to enable
            JavaScript to see it.
          </p>
          <p>
            Alternatively, I can just describe it to you. It opens with &#34;
            SAMUEL NEWMAN&#34; (that&#39;s me) in very large text. There&#39;s a
            cool effect where you can only see the outlines of the letters, and
            three point lights are flying around it revealing the fill of the
            letters. It&#39;s really cool and took a bunch of effort but if you
            really want to have JavaScript disabled then good for you. I&#39;m
            not bitter.
          </p>
          <p>
            You can then scroll down. It says &#34;ABOUT ME&#34; with the same
            cool effect.
          </p>
          <p>It then says (in normal letters):</p>
          <p>
            I&#39;m Samuel, a Senior Front-end Developer based in the UK. I have
            a passion for beautiful websites and beautiful code, and attempt to
            create both at the same time.
            <br />I recently graduated First Class with Honours from the
            University of Kent, obtaining a Bachelors degree in Computer
            Science. I specialised in the study of programming languages and
            type systems, creating a new one for my{" "}
            <a href="https://github.com/mozzius/lyre">
              dissertation research project
            </a>
            .
            <br />
            I&#39;m currently working at Codesigned Ltd on a variety of web and
            app projects
          </p>
          <p>
            One final flashy big text thing that says &#34;CONTACT&#34;, then it
            says:
          </p>
          <p>Get in touch</p>
          <p>
            <a href="mailto:samuel@felixnewman.com">samuel@felixnewman.com</a>
          </p>
          <p>See my <Link href="/curriculum-vitae"><a>CV</a></Link>, <Link href="/portfolio"><a>portfolio</a></Link>, <Link href="/blog"><a>blog</a></Link></p>
        </noscript>
      </div>
    </>
  );
};

export default Home;
