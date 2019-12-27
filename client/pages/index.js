import PredictionList from "../components/prediction/List";
import request from "../utils/request";

import Layout from "../components/Layout";

const HomePage = ({ predictions }) => {
  return <Layout>
    <h1>Home Page</h1>
    <PredictionList predictions={predictions} />
  </Layout>
};

HomePage.getInitialProps = async (ctx) => {
  const res = await request(ctx).get("/predictions");

  const predictions = res.data;

  return {
    predictions: predictions
  }
};

export default HomePage;