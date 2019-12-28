import PredictionItem from "./Item";

const PredictionList = ({ predictions }) => {
  return <div>
    { predictions.map(prediction => (
      <div>
        <a href={`/predictions/${prediction._id}`}>{prediction.hash}</a>
      </div>
    ))}
  </div>
};

export default PredictionList;