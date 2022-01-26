import { useEffect, useLayoutEffect, useState } from "react";

const getMargin = (child: Element): number => {
  const style = window.getComputedStyle(child);
  const marginRight = style.marginRight.slice(0, -2); //removing "px"
  const marginLeft = style.marginLeft.slice(0, -2);

  return Number(marginRight) + Number(marginLeft);
};

export const useCapacity = (list: HTMLUListElement | null) => {
  const [capacity, setCapacity] = useState(1);

  const getCapacity = () => {
    if (!list) return;

    const child = list.children[0];
    const margin = getMargin(child);
    const childWidth = child.clientWidth + margin;
    const width = list.offsetWidth;

    setCapacity(Math.floor(width / childWidth));
  };

  useLayoutEffect(() => {
    getCapacity();
  });

  useEffect(() => {
    const remove = window.addEventListener("resize", getCapacity);
    return () => remove;
  });

  return capacity;
};
