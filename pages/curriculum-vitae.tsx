import type { NextPage } from "next";
import Head from "next/head";

import { DefaultLayout } from "../components/layout";
import classes from "../styles/CV.module.scss";

const CV: NextPage = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Curriculum Vitae | Samuel Newman</title>
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
          Experienced senior front-end developer specialising in 3D experiences,
          with a passion for UX. Based in Kent, UK.
        </p>
        <h2>Work Experience</h2>
        <h3>Senior Front-end Developer, Codesigned Ltd</h3>
        <p>Senior Frontend Developer | July 2020 - Present</p>
        <p>Web Developer | March 2019 - July 2020</p>
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
            Effectively utilised Git along with CI/CD tools, and introduced this
            workflow to a team that was not using version control.
          </li>
        </ul>
        <h2>Education</h2>
        <h3>University of Kent</h3>
        <p>2018 - 2021</p>
        <p>
          BSc Computer Science (1<sup>st</sup> class)
        </p>
        <h2>Technical Skills</h2>
        <p>
          React.js, TypeScript, Three.js, Node.js, CSS, HTML, Git, Adobe XD,
          Bash
        </p>
        <p className={classes.references}>References available upon request</p>
      </div>
    </DefaultLayout>
  );
};

export default CV;
