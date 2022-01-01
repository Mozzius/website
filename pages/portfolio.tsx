import Image from "next/image";
import type { NextPage } from "next";

import { DefaultLayout } from "../components/layout";
import classes from "../styles/Portfolio.module.scss";

import websiteImg from "../images/website.png";
import lyreImg from "../images/lyre.png";
import lyricImg from "../images/lyric.png";
import youflixImg from "../images/youflix.png";
import Head from "next/head";

interface Props {
  name: string;
  description: string;
  image: any;
  url: string;
  tags: string[];
}

const Project = ({ name, description, image, url, tags }: Props) => {
  return (
    <a href={`https://github.com/mozzius/${url}`}>
      <Image src={image} alt={name} objectFit="cover" />
      <div className={classes.content}>
        <h2>{name}</h2>
        <p>{description}</p>
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
          name="Lyre, a programming language"
          description="My university dissertation research project, Lyre is a typed language that compiles to Erlang and implements channel-based concurrency"
          image={lyreImg}
          url="lyre"
          tags={["Haskell", "Erlang", "Yacc", "Lex"]}
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
