import styles from "./Button.module.css"

const styleMapping = {
  blue: "blue-btn",
  white: "white-btn"
}

const Button = (props) =>{
  return <a className={`${styles.btn} ${styles[styleMapping[props.color]]}`} href={props.link} onClick={props.onClick}>{props.name}</a>
}
export default Button;