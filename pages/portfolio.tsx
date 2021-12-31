import Image from "next/image";

import { DefaultLayout } from "../components/layout";
import websiteImg from "../images/website.png";
import classes from "../styles/Portfolio.module.scss";

const Portfolio = () => {
  return (
    <DefaultLayout>
      <h1>Portfolio</h1>
      <p>
        Click on a project to view it{"'"}s source code on GitHub -
        alternatively, you can{" "}
        <a href="https://github.com/Mozzius">go straight to my profile</a>.
      </p>
      <a href="https://github.com/Mozzius/website" />
      <div className={classes.portfolio}>
        <a href="https://github.com/Mozzius">
          <Image
            src={websiteImg}
            alt="homepage of this website"
            objectFit="cover"
          />
          <div className={classes.content}>
            <h2>The website you are currently viewing</h2>
            <div className={classes.tags}>
              <p>Tech used:</p>
              <span className={classes.react}>React</span>
              <span className={classes.three}>Three.js</span>
              <span className={classes.r3f}>React Three Fiber</span>
              <span className={classes.nextjs}>Next.js</span>
            </div>
          </div>
        </a>
      </div>
    </DefaultLayout>
  );
};

export default Portfolio;
