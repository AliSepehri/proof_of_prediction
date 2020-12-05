import btnStyles from "./Button.module.css"
import whiteBtnStyles from "./WhiteButton.module.css"

const WhiteButton = (props) =>{
  return <a className={`${btnStyles.btn} ${whiteBtnStyles["white-btn"]}`} href={props.link}>{props.name}</a>
}
export default WhiteButton;
