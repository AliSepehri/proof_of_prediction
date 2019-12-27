import PredictionList from "../../components/prediction/List";
import request from "../../utils/request";

import Layout from "../../components/Layout";

const AllProductions = ({ predictions }) => {
  return <Layout>
    <PredictionList predictions={predictions} />
  </Layout>
};

AllProductions.getInitialProps = async (ctx) => {
  const res = await request(ctx).get("/predictions");

  const predictions = res.data;

  return {
    predictions: predictions
  }
};

export default AllProductions;