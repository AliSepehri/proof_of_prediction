import { useRouter } from "next/router";
import PredictionItem from "../../components/prediction/Item";
import request from "../../utils/request";

import Layout from "../../components/Layout";

const SinglePrediction = ({ prediction }) => {
  return <Layout>
    <PredictionItem prediction={prediction} />
    <div><a href="/">Back</a></div>
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