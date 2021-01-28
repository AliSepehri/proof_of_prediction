import request from "../../utils/request";
import { useFormState } from "react-use-form-state";
import sha256 from "sha256";

import Layout from "../../components/Layout";
import styles from "./new.module.css"
import Button from "../../components/Button";

const handleCreate = async values => {
  const res = await request().post("/predictions", {
    ...values
  })
  .then(({data: prediction}) => {
    window.location=`/predictions/${prediction.transactionId}`
  });
}

const PredictionNew = ({ }) => {
  const [formState, input] = useFormState();

  const { values } = formState;
  values.hash = values.body ? sha256(values.body) : "-";

  const formControlStyles = {
    display: "block",
    fontWeight: "bold"
  };

  return <Layout>
    <div>
      <div className={styles["text-area"]}>
        <div className={styles["text-area-lable"]}>
          <label for="body" > Your Prediction: </label>
        </div>
        <textarea placeholder="enter your prediction here..."  {...input.textarea("body")} />
      </div>

      <div className={styles["show-hash"]}>
        <label for="hash" >Computed Hash: </label>
        <span>{values.hash}</span>
      </div>
      <div className={styles["show-hash-sec-btn"]}>
        <div className={styles["create-btn"]}>
          <Button name="Create" link="#" color="blue" onClick={() => handleCreate(formState.values)}></Button>
        </div>
        <div className={styles["back-btn"]}>
          <Button name="Back" link="/" color="white"></Button>
        </div>
      </div>
    </div>
  </Layout>
};

PredictionNew.getInitialProps = async (ctx) => {
  return {}
};

export default PredictionNew;
