import request from "../../utils/request";
import { useFormState } from "react-use-form-state";
import sha256 from "sha256";

import Layout from "../../components/Layout";
import styles from "./new.module.css"
import BlueButton from "../../components/BlueButton";
import WhiteButton from "../../components/WhiteButton";

const handleCreate = async values => {
  const res = await request().post("/predictions", {
    ...values
  })
  .then(() => window.location="/predictions");
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
        <BlueButton name="Create" link="#" onClick={() => handleCreate(formState.values)}></BlueButton>
      </div>
      <div className={styles["back-btn"]}><WhiteButton name="Back" link="/"></WhiteButton></div>
    </div>
    </div>
  </Layout>
};

PredictionNew.getInitialProps = async (ctx) => {
  return {}
};

export default PredictionNew;
