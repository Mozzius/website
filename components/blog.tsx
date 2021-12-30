import React, { useEffect, useState } from "react";

export const AlertButton = () => {
  return (
    <button onClick={() => alert("You clicked the button!")}>Click Me!</button>
  );
};

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        onClick={() => setCounter(counter + 1)}
        style={{ marginRight: 10 }}
      >
        Click Me!
      </button>
      I have been clicked {counter} times
    </div>
  );
};

export const WindowWidth = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const findWidth = () =>
      setWidth(typeof window !== "undefined" ? window.innerWidth : 0);

    window.addEventListener("resize", findWidth);
    return () => window.removeEventListener("resize", findWidth);
  }, []);

  return <p>Your window is {width}px wide</p>;
};
