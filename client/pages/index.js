import PredictionList from "../components/prediction/List";
import request from "../utils/request";
import Button from "../components/Button";
import Layout from "../components/Layout";
import styles from "./index.module.css"

const HomePage = ({ predictions }) => {
  return <Layout>
    <div className={styles["new-prediction-btn-position"]}><Button name="New Prediction" link="/predictions/new" color="blue" /></div>
    <div className={styles["section-title"]}>Popular Predictions</div>
    
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