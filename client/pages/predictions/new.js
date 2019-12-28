import request from "../../utils/request";
import { useFormState } from "react-use-form-state";
import sha256 from "sha256";

import Layout from "../../components/Layout";

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
      <div>
        <label for="body" style={formControlStyles}> Your Prediction: </label>
        <textarea {...input.textarea("body")} require />
      </div>

      <div>
        <label for="hash" style={formControlStyles}>Computed Hash: </label>
        <span>{values.hash}</span>
      </div>

      <div>
        <button onClick={() => handleCreate(formState.values)}>Create</button>
      </div>
      <div><a href="/">Back</a></div>
    </div>
  </Layout>
};

PredictionNew.getInitialProps = async (ctx) => {
  return {}
};

export default PredictionNew;