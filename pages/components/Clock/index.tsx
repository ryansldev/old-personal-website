import { FC, useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import { format } from "date-fns";

import styles from "./styles.module.css";

const Clock: FC = () => {
  const [clock, setClock] = useState("");

  useEffect(() => {
    function currentTime() {
      const date = new Date();
      const time = format(date, "hh:mm:ss a");

      setClock(time);
    }

    const t = setTimeout(function () {
      currentTime();
    }, 1000);
  }, [clock]);

  return (
    <div className={styles.clockContainer}>
      <button className={styles.clock}>
        {Number(clock.split(":")[0]) >= 6 && clock.split(" ")[1] === "PM" ? (
          <FiMoon size={24} />
        ) : (
          <FiSun size={24} />
        )}
        {clock}
      </button>
    </div>
  );
};

export default Clock;
