import styles from "./Header.module.css"
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return(
    <header className={styles["header-position"]}>
      <div className={styles["header"]}>
        <div className={styles["lable-and-logo"]}>
          <div className={styles["header-logo"]}><i className="fab fa-twitter fa-2x"></i></div>
          <div className={styles["header-lable"]}><span>prediction</span></div>
        </div>
        <div className={styles["header-user-dropdown"]}>
          <FontAwesomeIcon icon={faUser}/>
        </div>
        <div className={styles["login-signup"]}>
          <Button name="Log In" link="/login" color="white" />
          <Button name="Sign Up" link="/sign-up" color="blue" />
        </div>
      </div>
    </header>
  )
}

export default Header;
