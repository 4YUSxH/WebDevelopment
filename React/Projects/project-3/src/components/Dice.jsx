import { useRef, useState } from "react";
import Button from "./Button";
import styles from "./Dice.module.css";

const Dice = ({ setSelected, selected, score, setScore }) => {
  const rulesRef = useRef(null); // for rules Scroll

  const resetScore = () => { // Reset score
  setScore(0);
  setSelected(null);
};

  const [num, setNum] = useState(1);
  const randomNumGenerator = () => {
    if (selected != null) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setNum(randomNumber);

      if (selected === randomNumber) {
        setScore(score + randomNumber);
        setSelected(null);
      } else {
        setScore(score - 1);
        setSelected(null);
      }
    }
  };

  return (
    <div className={styles.dice}>
      <p className={selected ? styles.para_hide : styles.para}>
        You have not selected any number
      </p>
      <div className={styles.dice_content}>
        <img
          onClick={randomNumGenerator}
          src={`/images/dice_${num}.png`}
          alt=""
        />
        <p>Click on Dice to roll</p>
        <div ref={rulesRef} className={styles.btns}>
          <Button text="Reset Score" isFilled={false} onClick={resetScore} />
          <Button text="Show Rules" isFilled={true} scrollRef={rulesRef} />
        </div>
      </div>
      <div className={styles.rules}>
        <p>How to play dice game</p>
        <a href="#rules">
          <ul>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>
              After click on dice if selected number is equal to dice number you
              will get same point as dice{" "}
            </li>
            <li>If you get wrong guess then 2 point will be dedcuted </li>
          </ul>
        </a>
      </div>
    </div>
  );
};

export default Dice;
