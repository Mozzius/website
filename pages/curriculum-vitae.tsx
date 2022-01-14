import type { NextPage } from "next";
import Head from "next/head";

import { DefaultLayout } from "../components/layout";
import classes from "../styles/CV.module.scss";

const CV: NextPage = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Curriculum Vitae | Samuel Newman</title>
        <meta
          name="description"
          content="My CV. Education, work experience, etc"
        />
      </Head>
      <div className={classes.cv}>
        <h1>Samuel Newman</h1>
        <ul className={classes.summary}>
          <p>Contact</p>
          <li>
            <a href="mailto:samuel@felixnewman.com">samuel@felixnewman.com</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/samuel-felix-newman">
              linkedin.com/in/samuel-felix-newman
            </a>
          </li>
          <li>
            <a href="https://github.com/mozzius">github.com/mozzius</a>
          </li>
        </ul>
        <p>
          Senior front-end developer specialising in 3D experiences, with a
          passion for solving difficult problems. Based in Kent, UK.
        </p>
        <p>
          Expert at React.js, JavaScript, TypeScript, HTML, CSS. Also proficient
          with Node.js, Java, Erlang, Haskell, PHP, Git, Adobe XD, Bash. Always
          looking to add to this list.
        </p>
        <h2>Education</h2>
        <h3>BSc Computer Science, University of Kent</h3>
        <p className={classes.subtitle}>
          Hons, 1<sup>st</sup> class | 2018 - 2021
        </p>
        <p>
          Learned Java, Erlang, Haskell, Go. Primarily studied concurrency, type
          systems, programming languages, and compilers. Graduated with
          first-class honours.
        </p>
        <h3>Woodbridge School</h3>
        <p className={classes.subtitle}>
          A level: Computer Science (A), Maths (B), Physics (C)
        </p>
        <p className={classes.subtitle}>
          GCSE: 10 A*-B, incl. English (A*), Maths (A*), Computer Science (A)
        </p>
        <br />
        <h2>Work Experience</h2>
        <h3>Senior Front-end Developer, Codesigned Ltd</h3>
        <p className={classes.subtitle}>
          Senior Front-end Developer | July 2021 - Present
        </p>
        <p className={classes.subtitle}>
          Web Developer | March 2019 - July 2021
        </p>
        <ul>
          <li>
            Built software using a variety of technology according to client
            needs - primarily React.js and TypeScript, but also React Native,
            Node.js, Three.js, Python and others.
          </li>
          <li>
            Lead developer for a major long-term project and oversaw the
            introduction of many new features, working extremely closely with
            the client. I was involved not just in the development, but also in
            the design and planning of many features, and took some features
            from user stories all the way to production. This involved
            maintaining and extending a highly complex 3D web application, with
            a tech stack that included React.js, Three.js, JSS and Jest.
          </li>
          <li>
            Lead a modernisation initiative on two large React codebases
            suffering from technical debt.
          </li>
          <li>
            Architected and developed multiple React Native apps from scratch
            based on client requirements.
          </li>
          <li>
            Used agile methodology to work with other developers, both internal
            and external, enabling effective collaboration.
          </li>
          <li>
            Effectively utilised Git along with CI/CD, creating and maintaining
            workflows that maximised developer productivity.
          </li>
        </ul>
        {/* <h2>About me</h2>
        <p>
          My non-programming interests include movies, reading and travelling.
          Currently reading the Culture novels by Iain M Banks. I enjoy skiing
          and fencing (former treasurer of UKC&#39;s Fencing Society). Trying to
          learn Finnish. Dog person.
        </p> */}
        <p className={classes.references}>References available upon request</p>
      </div>
    </DefaultLayout>
  );
};

export default CV;
