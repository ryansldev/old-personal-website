import type { FC, ReactNode } from "react";

import Link from "next/link";

import styles from "./styles.module.css";

type ProjectProps = {
  image: string;
  children: ReactNode;
  projectLink?: string;
  imageAt?: "left" | "right";
};

const Project: FC<ProjectProps> = ({
  image = "left",
  imageAt,
  projectLink = "https://github.com/ryansldev",
  children,
}) => {
  return (
    <div
      className={styles.project}
      style={{
        flexDirection: `${imageAt === "right" ? "row-reverse" : "row"}`,
      }}
    >
      <Link href={projectLink} passHref>
        <a
          className={styles.background}
          style={{ backgroundImage: `url(${image})` }}
          target="_blank"
        ></a>
      </Link>
      <div className={styles.content}>
        <div className={styles.text}>{children}</div>
      </div>
    </div>
  );
};

export { Project };
