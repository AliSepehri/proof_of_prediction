import Section from "../Section";

const PredictionList = ({ predictions }) => {
  return <div>
    { predictions.map(prediction => (
      <div>
        <Section content={prediction.hash} predictionId={prediction._id} createdAt={prediction.createdAt} />
      </div>
    ))}
  </div>
};

export default PredictionList;