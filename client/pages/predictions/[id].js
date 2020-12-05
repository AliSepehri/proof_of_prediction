import { useRouter } from "next/router";
import PredictionItem from "../../components/prediction/Item";
import Section from "../../components/Section"
import request from "../../utils/request";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import styles from "./show.module.css"

const SinglePrediction = ({ prediction }) => {
  return <Layout>
    <Section content={prediction.hash} predictionId={prediction._id} createdAt={prediction.createdAt} />
    <div className={styles.backBtnPosition}><Button name="Back" link="/" color="blue"/></div>
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
