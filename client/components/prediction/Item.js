const PredictionItem = ({ prediction }) => {
  return <div>
    <p><b>Hash:</b> {prediction.hash}</p>
    <p><b>Transaction ID:</b> {prediction.transactionId}</p>
    <p><b>Created At:</b> {prediction.createdAt}</p>
  </div>;
};

export default PredictionItem;