import styles from './Home.module.css'

const Home = ({startGame}) => {
  return (
    <div className={styles.home}>
        <img src="/images/dice.png" alt="" />
        <div className={styles.left}>
            <h1>DICE GAME</h1>
            <button onClick={startGame}>Play Now</button>
        </div>
    </div>
  )
}

export default Home
