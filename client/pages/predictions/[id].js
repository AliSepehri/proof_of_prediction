import request from "../../utils/request";
import { useFormState } from "react-use-form-state";
import sha256 from "sha256";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import styles from "./show.module.css"

const SinglePrediction = ({ prediction }) => {
  const [formState, input] = useFormState();
  const { values } = formState;
  const isVerified = values.body && sha256(values.body) === prediction.hash;

  return <Layout>
    <div>
      <div className={styles["text-area"]}>
        <div className={styles["text-area-lable"]}>
          <label for="body" > Prediction: </label>
        </div>
        <textarea placeholder="Type the prediction to confirm!"  {...input.textarea("body")} />
      </div>

      <div className={styles["show-hash"]}>
        <label for="hash" >Hash: </label>
        <span> {prediction.hash} </span>
      </div>

      <div className={styles["confirmation-box"]}>
        <div className={styles["confirmation-label"]}>Matched?</div>
        <div className={styles["confirmation-icon"]}>
          { !isVerified && <FontAwesomeIcon icon={faTimes} color="red" size="2x" /> }
          { isVerified && <FontAwesomeIcon icon={faCheck} color="green" size="2x" /> }
        </div>
      </div>

      <div className={styles["btn-area"]}>
        <Button name="Back" link="/" color="blue"></Button>
      </div>
    </div>
  </Layout>
};

SinglePrediction.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const res = await request(ctx).get(`/predictions/${id}`);

  const prediction = res.data;

  return {
    prediction: prediction
  }
};

export default SinglePrediction;
