import { AlertButton, Counter, WindowWidth } from "../blog";
import Codeblock from "./Codeblock";

export const components = {
  pre: (props: any) => <Codeblock {...props.children.props} />,
  p: (props: any) => <p {...props} />,
  code: (props: any) => <code {...props} />,
  AlertButton,
  Counter,
  WindowWidth,
};
