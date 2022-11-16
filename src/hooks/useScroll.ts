import { useEffect, useRef } from "react";

export const useScroll = (callback: (value: number) => void) => {
  const ref = useRef<any>(null);
  useEffect(() => {
    if (ref.current) {
      const current = ref.current;
      const onScroll = () => {
        if (current) {
          callback(current.scrollTop);
        }
      };
      current.addEventListener("scroll", onScroll);
      return () => current?.removeEventListener("scroll", onScroll);
    }
  }, [callback]);

  return ref;
};
