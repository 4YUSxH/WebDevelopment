import { useState } from "react";
import Box from "./Box";
import styles from "./Play.module.css";
import Dice from "./Dice";

const Play = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const [selected, setSelected] = useState(null);

  const [score, setScore] = useState(0);

  return (
    <div className={styles.play}>
      <div className={styles.top}>
        <div className={styles.top_left}>
          <p>{score}</p>
          <p>Total Score</p>
        </div>
        <div className={styles.top_right}>
          <div className={styles.boxes}>
            {arr.map((value, idx) => {
              return (
                <div key={idx}>
                  <Box
                    value={value}
                    isSelected={selected === value}
                    onClick={() => setSelected(value)}
                  />
                </div>
              );
            })}
          </div>
          <p>Select Number</p>
        </div>
      </div>
      <Dice setSelected={setSelected} selected={selected} score={score} setScore={setScore} />
    </div>
  );
};

export default Play;
