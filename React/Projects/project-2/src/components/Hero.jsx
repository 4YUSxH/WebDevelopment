import styles from "./Hero.module.css"
import Button from "./Button";
import { RiMessage2Fill } from "react-icons/ri";
import { MdCall } from "react-icons/md";
import { TiMessageTyping } from "react-icons/ti";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.top}>
        <p>CONTACT US</p>
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>
      <div className={styles.below_content}>
        <div className={styles.left}>
          <div className={styles.btns}>
            <div className={styles.outlined}>
              <Button icon={<RiMessage2Fill size="23px" />} text="VIA SUPPORT CHAT" isOutline={false}/>
              <Button icon={<MdCall  size="23px" />} text="VIA CALL" isOutline={false}/>
            </div>
            <Button icon={<TiMessageTyping  size="25px" />} text="VIA EMAIL FORM" isOutline={true}/>
          </div>
          <form>
            <div className={styles.form_fields}>
              <label htmlFor="name">NAME</label>
              <input type="text" />
            </div>
            <div className={styles.form_fields}>
              <label htmlFor="email">E-MAIL</label>
              <input type="email" />
            </div>
            <div className={styles.form_fields}>
              <label htmlFor="text">TEXT</label>
              <textarea name="text"></textarea>
            </div>
            <button className={styles.submit_btn}>SUBMIT</button>
          </form>
        </div>
        <div className={styles.right}>
            <img src="images/contact.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
