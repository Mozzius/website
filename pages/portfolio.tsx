import Image from "next/image";
import type { NextPage } from "next";

import { DefaultLayout } from "../components/layout";
import classes from "../styles/Portfolio.module.scss";

import websiteImg from "../images/website.png";
import lyreImg from "../images/lyre.png";
import lyricImg from "../images/lyric.png";
import youflixImg from "../images/youflix.png";
import tincyImg from "../images/tincy.png";
import terrainImg from "../images/terrain.png";
import Head from "next/head";
import { Fragment } from "react";

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
          name="Tincy Link"
          description={[
            "A URL shortener built with Next.js, tRPC, Prisma, PostgreSQL and Tailwind (the create-t3-app stack).",
            "Uses Next.js' middleware feature to redirect to the URL stored in the database.",
          ]}
          image={tincyImg}
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
          name="Lyre, a programming language"
          description="My university dissertation research project, Lyre is a typed language that compiles to Erlang and implements channel-based concurrency"
          image={lyreImg}
          url="lyre"
          tags={["Haskell", "Erlang", "Yacc", "Lex"]}
        />
        <Project
          name="Personal site"
          description="The website you are currently viewing"
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
          description="A simplex noise-based terrain generator built with Three.js and React Three Fiber"
          image={terrainImg}
          url="r3f-terrain"
          tags={["React", "Three.js", "React Three Fiber"]}
        />
        <Project
          name="Lyric, a song lyric game"
          description="One of my earliest projects, Lyric is a game where you have to figure out the lyrics of a song. You can play alone or with other people"
          image={lyricImg}
          url="lyric"
          tags={["Python", "Flask", "MongoDB", "Socket.io"]}
        />
        <Project
          name="YouFlix - YouTube in the style of Netflix"
          description="This project pulls YouTube videos from the YouTube API and displays them in a Netflix-like UI"
          image={youflixImg}
          url="youflix"
          tags={["TypeScript", "React", "Next.js", "Google API"]}
        />
      </div>
    </DefaultLayout>
  );
};

export default Portfolio;
