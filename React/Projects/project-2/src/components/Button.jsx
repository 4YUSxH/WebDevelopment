import styles from "./Button.module.css"

const Button = ({icon, text, isOutline}) => {
  return (
    <div className={isOutline ? styles.btn_filled : styles.btn_outline}>
      {icon}
      {text}
    </div>
  )
}

export default Button
