import request from "../utils/request";

import Layout from "../components/Layout";

const PredictionList = ({ predictions }) => {
  return <Layout>
    { predictions.map(prediction => (
      <div>{prediction.hash}</div>
    ))}
  </Layout>
};

PredictionList.getInitialProps = async () => {
  const res = await request.get("/predictions", {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYWUwYzViY2Y2NjQ2MmU2ZWVmZjI0NCIsImlhdCI6MTU3MjYzMzk2Mn0.OvJZC_plrlF2_F4i6vQX7oH4kDtmSCC12jURW9OGr9g"
    }
  });

  const predictions = res.data;

  return {
    predictions: predictions
  }
};

export default PredictionList;