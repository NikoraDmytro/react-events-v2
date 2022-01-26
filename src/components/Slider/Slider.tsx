import React, { useState } from "react";

import { useCapacity } from "../../utils/hooks/useCapacity";

import { SliderProps } from "../../shared/types/Props";

import styles from "./Slider.module.scss";

export function Slider<T>({ data, render, ...props }: SliderProps<T>) {
  const [start, setStart] = useState(0);
  const [listRef, setListRef] = useState<HTMLUListElement | null>(null);

  const capacity = useCapacity(listRef) || 1;

  const end = Math.min(start + capacity, data.length);

  const next = () => setStart(start + 1);
  const previous = () => setStart(start - 1);

  return (
    <div className={styles.slider}>
      <button onClick={previous} disabled={start === 0}>
        <img src="./img/arrow.png" alt="Previous" />
      </button>

      <ul ref={(el) => setListRef(el)} {...props}>
        {render(data.slice(start, end))}
      </ul>

      <button onClick={next} disabled={end === data.length}>
        <img src="./img/arrow.png" alt="Next" />
      </button>
    </div>
  );
}
