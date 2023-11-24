import classes from "../../styles/Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className={classes.background}>
      <section className={classes.section}>
        <main className={classes.main}>{children}</main>
      </section>
    </div>
  );
};

export default DefaultLayout;
