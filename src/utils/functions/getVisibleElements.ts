import React from "react";

export const getVisibleElements = (
  capacity: number,
  start: number,
  list: React.ReactElement[]
) => {
  const visibleElements: React.ReactElement[] = [];
  const lastIndex = Math.max(start + capacity, list.length);

  for (let i = start; i < lastIndex; i++) {
    const element = list[i];

    visibleElements.push(element);
  }

  return visibleElements;
};
