import styles from './Box.module.css'

const Box = ({value, isSelected, onClick}) => {
  return (
    <div onClick={onClick} className={isSelected ? styles.box_onclick : styles.box}>
      <p>{value}</p>
    </div>
  )
}

export default Box
