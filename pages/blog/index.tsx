import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import { format } from "date-fns";

import { mdxPath, getSlugs } from "../../utils/mdx";
import { DefaultLayout } from "../../components/layout";

import classes from "../../styles/Blog.module.scss";
import Head from "next/head";

interface Props {
  blogs: {
    slug: string;
    [key: string]: string;
  }[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogs = getSlugs.map((slug) => {
    const source = fs.readFileSync(mdxPath(slug));
    const { data } = matter(source);

    for (const key of Object.keys(data)) {
      if (data[key] instanceof Date) {
        data[key] = format(data[key], "MMMM do, yyyy");
      }
    }

    return {
      slug,
      ...data,
    };
  });

  return {
    props: {
      blogs,
    },
  };
};

const BlogIndex: NextPage<Props> = ({ blogs }) => {
  return (
    <DefaultLayout>
      <Head>
        <title>Samuel Newman | Blog</title>
        <meta name="description" content="My collection of ramblings" />
      </Head>
      <h1>Posts</h1>
      <ul className={classes.cards}>
        {blogs
          .sort(
            (a, b) =>
              new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime()
          )
          .map((blog) => (
            <li key={blog.slug}>
              <div className={classes.background} />
              <Link href={`/blog/${blog.slug}`}>
                <a>
                  <p>{blog.title ?? blog.slug}</p>
                  {blog.date && <p>{blog.date}</p>}
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </DefaultLayout>
  );
};

export default BlogIndex;
