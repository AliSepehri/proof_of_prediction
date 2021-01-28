import Section from "../Section";

const PredictionList = ({ predictions }) => {
  return <div>
    { predictions.map(prediction => (
      <div key={prediction._id}>
        <Section content={prediction.hash} transactionId={prediction.transactionId} createdAt={prediction.createdAt} />
      </div>
    ))}
  </div>
};

export default PredictionList;