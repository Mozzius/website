import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Cross as Hamburger } from "hamburger-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

import classes from "../styles/Nav.module.scss";
import cls from "../utils/cls";

const Link = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  const { route } = useRouter();
  const [, base] = route.split("/");

  const active = path === `/${base}`;

  return (
    <NextLink
      href={path}
      className={cls({
        [classes.active]: active,
        [classes.homeLink]: route === "/",
      })}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </NextLink>
  );
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { route, events } = useRouter();

  useEffect(() => {
    const handleRouteChange = () => setOpen(false);

    events.on("routeChangeStart", handleRouteChange);

    return () => events.off("routeChangeStart", handleRouteChange);
  }, [events]);

  return (
    <header
      className={cls(classes.header, {
        [classes.home]: route === "/",
        [classes.toggled]: open,
      })}
    >
      <div className={classes.inner}>
        <p>Samuel Newman</p>
        <nav className={cls({ [classes.toggled]: open })}>
          <Link path="/">Home</Link>
          <Link path="/blog">Blog</Link>
          <Link path="/portfolio">Portfolio</Link>
          <Link path="/curriculum-vitae">Curriculum Vitae</Link>
          <div className={classes.external}>
            <a href="https://github.com/mozzius">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/samuel-felix-newman">
              <LinkedinIcon size={24} />
            </a>
            <a href="mailto:samuel@felixnewman.com">
              <MailIcon size={24} />
            </a>
          </div>
        </nav>
        <Hamburger toggled={open} toggle={setOpen} rounded size={20} />
      </div>
    </header>
  );
};

export default Nav;
