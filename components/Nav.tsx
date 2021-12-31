import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Cross as Hamburger } from "hamburger-react";

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

  return (
    <NextLink href={path}>
      <a
        className={cls({
          [classes.active]: path === `/${base}`,
          [classes.homeLink]: route === "/",
        })}
      >
        {children}
      </a>
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
        </nav>
        <Hamburger toggled={open} toggle={setOpen} rounded size={20} />
      </div>
    </header>
  );
};

export default Nav;
