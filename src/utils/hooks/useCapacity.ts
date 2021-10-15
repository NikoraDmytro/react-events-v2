import { RefObject, useLayoutEffect, useState } from "react";

const getMargin = (child: Element): number => {
  const style = window.getComputedStyle(child);
  const margin = style.marginRight.slice(0, -2); //removing "px"

  return Number(margin);
};

export const useCapacity = (ref: RefObject<HTMLUListElement>) => {
  const [capacity, setCapacity] = useState(1);

  useLayoutEffect(() => {
    const getCapacity = () => {
      if (!ref.current) return;

      const child = ref.current.children[0];
      const margin = getMargin(child);
      const childWidth = child.clientWidth + margin;
      const width = ref.current.offsetWidth - margin;

      setCapacity(Math.floor(width / childWidth));
    };

    window.addEventListener("resize", getCapacity);
    getCapacity();
    return () => window.removeEventListener("resize", getCapacity);
  }, [ref]);

  return capacity;
};
