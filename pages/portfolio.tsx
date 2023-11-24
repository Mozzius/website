import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { DefaultLayout } from "../components/layout";
import grayskyImg from "../images/graysky.png";
import lyreImg from "../images/lyre.png";
import lyricImg from "../images/lyric.png";
import terrainImg from "../images/terrain.png";
import tincyLinkImg from "../images/tincylink.png";
import tincyPicsImg from "../images/tincypics.png";
import websiteImg from "../images/website.png";
import youflixImg from "../images/youflix.png";
import classes from "../styles/Portfolio.module.scss";

interface Props {
  name: string;
  description: string | string[];
  image: any;
  url: string;
  tags: string[];
}

const Project = ({ name, description, image, url, tags }: Props) => {
  return (
    <a href={`https://github.com/mozzius/${url}`}>
      <Image src={image} alt={name} />
      <div className={classes.content}>
        <h2>{name}</h2>
        {typeof description === "string" ? (
          <p>{description}</p>
        ) : (
          <p>
            {description.map((d, i) => (
              <Fragment key={i}>
                {d}
                <br />
                <br />
              </Fragment>
            ))}
          </p>
        )}
        <div className={classes.grow} />
        <div className={classes.tags}>
          <p>Tech used:</p>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

const Portfolio: NextPage = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>My Portfolio | Samuel Newman</title>
      </Head>
      <h1>Portfolio</h1>
      <p>
        Click on a project to view it{"'"}s source code on GitHub -
        alternatively, you can{" "}
        <a href="https://github.com/mozzius">go straight to my profile</a>.
      </p>
      <div className={classes.portfolio}>
        <Project
          name="Graysky"
          description={[
            "A third-party client for the Bluesky social network, available on iOS and Android. It's had over 15k downloads at time of writing.",
            "Graysky was the first client to launch on the App Store and Play Store, and was featured in TechCrunch.",
          ]}
          image={grayskyImg}
          url="graysky"
          tags={[
            "React Native",
            "Expo Router",
            "Tailwind",
            "Prisma",
            "Next.js",
            "tRPC",
          ]}
        />
        <Project
          name="Tincy Pics"
          description={[
            "A simple image hosting service, built with Next.js, tRPC, Prisma, PostgreSQL and Tailwind (the create-t3-app stack).",
            "Images are stored in AWS S3 and cached by AWS Cloudfront.",
          ]}
          image={tincyPicsImg}
          url="tincypics"
          tags={[
            "TypeScript",
            "React",
            "Next.js",
            "tRPC",
            "Prisma",
            "Tailwind",
            "AWS",
          ]}
        />
        <Project
          name="Lyre, a programming language"
          description="My university dissertation research project, Lyre is a typed language that compiles to Erlang and implements channel-based concurrency."
          image={lyreImg}
          url="lyre"
          tags={["Haskell", "Erlang", "Yacc", "Lex"]}
        />
        <Project
          name="Tincy Link"
          description={[
            "A URL shortener built with Next.js, tRPC, Prisma, PostgreSQL and Tailwind (the create-t3-app stack).",
            "Uses Next.js' middleware feature to redirect to the URL stored in the database.",
          ]}
          image={tincyLinkImg}
          url="tincylink"
          tags={[
            "TypeScript",
            "React",
            "Next.js",
            "tRPC",
            "Prisma",
            "Tailwind",
          ]}
        />
        <Project
          name="Personal site"
          description="The website you are currently viewing."
          image={websiteImg}
          url="website"
          tags={[
            "TypeScript",
            "React",
            "Three.js",
            "React Three Fiber",
            "Next.js",
          ]}
        />
        <Project
          name="Terrain Generator"
          description="A simplex noise-based terrain generator built with Three.js and React Three Fiber."
          image={terrainImg}
          url="r3f-terrain"
          tags={["React", "Three.js", "React Three Fiber"]}
        />
        <Project
          name="Lyric, a song lyric game"
          description="One of my earliest projects, Lyric is a game where you have to figure out the lyrics of a song. You can play alone or with other people."
          image={lyricImg}
          url="lyric"
          tags={["Python", "Flask", "MongoDB", "Socket.io"]}
        />
      </div>
    </DefaultLayout>
  );
};

export default Portfolio;
