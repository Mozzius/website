import React from "react";
import { Highlight, Language, themes } from "prism-react-renderer";

const Codeblock = ({
  children,
  className,
}: {
  children: string;
  className: string;
}) => {
  const language = className.replace(/language-/, "") as Language;
  return (
    <Highlight theme={themes.vsDark} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.map(
            (line, i) =>
              i + 1 !== tokens.length && (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ),
          )}
        </pre>
      )}
    </Highlight>
  );
};

export default Codeblock;
