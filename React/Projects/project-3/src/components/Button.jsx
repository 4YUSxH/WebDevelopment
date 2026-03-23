import { useRef } from "react";
import styles from "./Button.module.css";

const Button = ({ isFilled, text, scrollRef, onClick }) => {
  const handleClick = () => {
    if (scrollRef) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={isFilled ? styles.filled : styles.outline}
    >
      {text}
    </button>
  );
};

export default Button;
