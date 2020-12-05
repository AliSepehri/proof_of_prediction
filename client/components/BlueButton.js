import btnStyles from "./Button.module.css"
import blueBtnStyles from "./BlueButton.module.css"

const BlueButton = (props) =>{
  return <a className={`${btnStyles.btn} ${blueBtnStyles["blue-btn"]}`} href={props.link} onClick={props.onClick}>{props.name}</a>
}
export default BlueButton;