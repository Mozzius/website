import classes from "../../styles/Layout.module.scss";

interface Props {
  children: React.ReactNode;
  frontMatter: { [key: string]: string };
}

const BlogLayout = ({ children, frontMatter }: Props) => {
  return (
    <article className={classes.background}>
      <section className={classes.header}>
        <div className={classes.section}>
          <h1 className={classes.title}>{frontMatter.title}</h1>
          {frontMatter.description && (
            <p className={classes.description}>{frontMatter.description}</p>
          )}
          {frontMatter.author && (
            <p className={classes.author_and_date}>
              <span>By {frontMatter.author}</span>
              {frontMatter.date && frontMatter.date}
            </p>
          )}
        </div>
      </section>
      <section className={classes.section}>
        <main className={classes.blog}>{children}</main>
      </section>
    </article>
  );
};

export default BlogLayout;
