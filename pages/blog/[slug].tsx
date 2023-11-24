import fs from "fs";
import { ParsedUrlQuery } from "querystring";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { format } from "date-fns";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import { BlogLayout } from "../../components/layout";
import { components } from "../../components/mdx";
import { getSlugs, mdxPath } from "../../utils/mdx";

interface Props {
  source: any;
  frontMatter: any;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const source = fs.readFileSync(mdxPath(params?.slug!));

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  for (const key of Object.keys(data)) {
    if (data[key] instanceof Date) {
      data.timestamp = (data[key] as Date).getTime();
      data[key] = format(data[key], "MMMM do, yyyy");
    }
  }

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs.map((path) => ({
    params: { slug: path },
  }));

  return {
    paths,
    fallback: false,
  };
};

const BlogPage: NextPage<Props> = ({ source, frontMatter }) => {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <Head>
        <title>{frontMatter.title} | Samuel Newman</title>
        {frontMatter.description && (
          <meta name="description" content={frontMatter.description} />
        )}
      </Head>
      <MDXRemote {...source} components={components} />
    </BlogLayout>
  );
};

export default BlogPage;
