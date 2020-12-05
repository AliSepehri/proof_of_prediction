import styles from "./Button.module.css"

const Button = (props) =>{
  return <a className={styles.btn} href="#">{props.name}</a>
}
export default Button;