import type { FC, ReactNode } from "react";

import Link from "next/link";

import styles from "./styles.module.css";

type ProjectProps = {
  image?: string;
  children: ReactNode;
  projectLink?: string;
  imageAt?: "left" | "right";
  mockups?: {
    url: string;
  }[];
};

const Project: FC<ProjectProps> = ({
  image,
  imageAt = "left",
  projectLink = "https://github.com/ryansldev",
  mockups,
  children,
}) => {
  return (
    <div className={styles.projectContainer}>
      <div className="container">
        <div
          className={styles.project}
          style={{
            flexDirection: `${
              image ? (imageAt === "right" ? "row-reverse" : "row") : "column"
            }`,
            minHeight: `${image ? "100vh" : "100%"}`,
          }}
        >
          {image && (
            <Link href={projectLink} passHref>
              <a
                className={styles.background}
                style={{ backgroundImage: `url(${image})` }}
                target="_blank"
              ></a>
            </Link>
          )}
          <div
            className={styles.content}
            style={{
              maxWidth: `${image ? "77vw" : "50vw"}`,
            }}
          >
            <div className={styles.text}>{children}</div>
          </div>
        </div>
      </div>
      {mockups && mockups?.length > 0 && (
        <div className={styles.mockups}>
          {mockups.map((mockup, key) => (
            <div
              key={key}
              className={styles.mockup}
              style={{
                backgroundImage: `linear-gradient(180deg, #0F0F0F 9.58%, rgba(15, 15, 15, 0) 52.24%, rgba(15, 15, 15, 0) 63.58%, #0F0F0F 96.71%), url(${mockup.url})`,
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
