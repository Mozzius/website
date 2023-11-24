import fs from "fs";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { format } from "date-fns";
import matter from "gray-matter";

import { DefaultLayout } from "../../components/layout";
import classes from "../../styles/Blog.module.scss";
import { getSlugs, mdxPath } from "../../utils/mdx";

interface Props {
  blogs: {
    slug: string;
    timestamp: number;
    [key: string]: string | number;
  }[];
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = getSlugs.map((slug) => {
    const source = fs.readFileSync(mdxPath(slug));
    const { data } = matter(source);

    for (const key of Object.keys(data)) {
      if (data[key] instanceof Date) {
        data.timestamp = (data[key] as Date).getTime();
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
        <title>Blog | Samuel Newman</title>
        <meta name="description" content="My collection of ramblings" />
      </Head>
      <h1>Posts</h1>
      <ul className={classes.cards}>
        {blogs
          .filter((blog) => !blog.draft)
          .sort((a, b) => b.timestamp - a.timestamp)
          .map((blog) => (
            <li key={blog.slug}>
              <div className={classes.background} />
              <Link href={`/blog/${blog.slug}`}>
                <p>{blog.title ?? blog.slug}</p>
                {blog.date && <p>{blog.date}</p>}
              </Link>
            </li>
          ))}
      </ul>
    </DefaultLayout>
  );
};

export default BlogIndex;
