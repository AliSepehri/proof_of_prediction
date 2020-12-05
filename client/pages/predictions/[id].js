import { useRouter } from "next/router";
import PredictionItem from "../../components/prediction/Item";
import Section from "../../components/Section"
import request from "../../utils/request";

import Layout from "../../components/Layout";
import BlueButton from "../../components/BlueButton";
import styles from "./show.module.css"

const SinglePrediction = ({ prediction }) => {
  return <Layout>
    <Section content={prediction.hash} predictionId={prediction._id} createdAt={prediction.createdAt} />
    <div className={styles.backBtnPosition}><BlueButton name="Back" link="/"/></div>
    
    {/* <PredictionItem prediction={prediction} />
    <div><a href="/">Back</a></div> */}
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
