import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className="container">
      <img src="images/logo.png" alt="logo"/>
      <ul className={styles.nav_links}>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
