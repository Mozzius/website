/* eslint-disable jsx-a11y/alt-text */
import * as Components from "../blog-stuff";
import Codeblock from "./Codeblock";

export const components = {
  pre: (props: any) => <Codeblock {...props.children.props} />,
  p: (props: any) => <p {...props} />,
  code: (props: any) => <code {...props} />,
  ...Components,
};
