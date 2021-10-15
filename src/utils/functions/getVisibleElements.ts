import React from "react";

export const getVisibleElements = (
  capacity: number,
  start: number,
  list: React.ReactElement[]
) => {
  const visibleElements: React.ReactElement[] = [];

  for (let i = 0; i < capacity && i < list.length; i++) {
    const element = list[start + i];

    visibleElements.push(element);
  }

  return visibleElements;
};
