import type { FC } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import Link from "next/link";

import styles from "./styles.module.css";

const Networks: FC = () => {
  return (
    <div className={styles.networksContainer}>
      <div className={styles.networks}>
        <Link href="https://github.com/ryansldev" passHref={true}>
          <a target="_blank">
            <FaGithub size={18} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/ryansldev/" passHref={true}>
          <a target="_blank">
            <FaLinkedin size={18} />
          </a>
        </Link>
        <Link href="https://twitter.com/ryansldev" passHref={true}>
          <a target="_blank">
            <FaTwitter size={18} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Networks;
