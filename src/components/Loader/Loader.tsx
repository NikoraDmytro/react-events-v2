import React from "react";

import styles from "./Loader.module.scss";

interface Props {
  className?: string;
}

export const Loader = ({ className }: Props) => {
  return (
    <div className={styles["lds-roller"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
