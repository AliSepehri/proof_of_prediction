import request from "../../utils/request";

import Layout from "../../components/Layout";

const PredictionList = ({ predictions }) => {
  return <Layout>
    { predictions.map(prediction => (
      <div>{prediction.hash}</div>
    ))}
  </Layout>
};

PredictionList.getInitialProps = async (ctx) => {
  const res = await request(ctx).get("/predictions");

  const predictions = res.data;

  return {
    predictions: predictions
  }
};

export default PredictionList;