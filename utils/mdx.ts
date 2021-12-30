import fs from "fs";
import path from "path";

export const mdxPath = (name: string) =>
  path.join(process.cwd(), "posts", `${name}.mdx`);

export const getSlugs = fs
  .readdirSync(path.join(process.cwd(), "posts"))
  .filter((path) => /\.mdx?$/.test(path))
  .map((path) => path.replace(/\.mdx?$/, ""));
