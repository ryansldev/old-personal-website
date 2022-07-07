import type { FC } from "react";

import styles from "./styles.module.css";

const ScrollTo: FC<{ href: string }> = ({ href }) => {
  return (
    <div className={styles.scrollTo}>
      <a href={href}>
        <div className={styles.scrollToIcon}></div>
      </a>
    </div>
  );
};

export default ScrollTo;
