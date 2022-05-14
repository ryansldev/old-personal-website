import { useState, useEffect } from "react";
import type { FC } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import styles from "./styles.module.css";

const DarkModeButton: FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (darkMode) {
      html?.classList.add("dark-mode");
      return;
    }

    html?.classList.remove("dark-mode");
  }, [darkMode]);

  return (
    <button className={styles.viewMode} onClick={() => setDarkMode(!darkMode)}>
      {!darkMode ? <FiMoon size={24} /> : <FiSun size={24} />}
    </button>
  );
};

export default DarkModeButton;
