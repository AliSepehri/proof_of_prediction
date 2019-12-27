const PredictionList = ({ predictions }) => {
  return <div>
    { predictions.map(prediction => (
      <div>{prediction.hash}</div>
    ))}
  </div>
};

export default PredictionList;