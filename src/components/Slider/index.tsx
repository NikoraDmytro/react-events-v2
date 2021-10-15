import React, { useRef, useState } from "react";
import { SliderProps } from "../../shared/types/Props";
import { useCapacity } from "../../utils/useCapacity";
import styles from "./Slider.module.scss";

const getVisibleElements = (
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

export const Slider = ({ list, className }: SliderProps) => {
  const [start, setStart] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const capacity = useCapacity(listRef);

  const next = () => setStart(start + 1);
  const previous = () => setStart(start - 1);

  return (
    <div className={styles.slider}>
      <button onClick={previous} disabled={start === 0}>
        <img src="./img/arrow.png" alt="Previous" />
      </button>

      <ul className={className} ref={listRef}>
        {getVisibleElements(capacity, start, list)}
      </ul>

      <button onClick={next} disabled={start >= list.length - capacity}>
        <img src="./img/arrow.png" alt="Next" />
      </button>
    </div>
  );
};
