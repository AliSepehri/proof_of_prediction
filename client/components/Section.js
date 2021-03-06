import styles from "./Section.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

const formatDatetime = (datetimeStr) => {
  var parsedDatetime = new Date(Date.parse(datetimeStr))
  return `${parsedDatetime.toLocaleDateString("en-US")} ${parsedDatetime.toLocaleTimeString("en-US")}`
}

const Section = (props) => {
  return <section>
    <div className={styles["section"]}>
      <div className={styles["datetime"]}>{formatDatetime(props.createdAt)}</div>
      <div className={styles["hash"]}><a href={`/predictions/${props.transactionId}`}>{props.content}</a></div>
      <div className={styles["section-btn"]}>
        <div className={styles["section-btn-share"]}><a href="#"><FontAwesomeIcon className={styles["share-icon"]} icon={faShare} />Share</a></div>

        {/* <i className="fas fa-share "></i> */}
      </div>
    </div>
  </section>
}
export default Section;
