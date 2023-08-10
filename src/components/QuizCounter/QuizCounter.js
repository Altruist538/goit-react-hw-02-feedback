export const QuizCounter = ({ item: { good, neutral, bad }, counter }) => {
  return (
    <>
      <div>
        <h2>Please leave feedback</h2>
        <button onClick={() => counter('good')}>Good</button>
        <button onClick={() => counter('neutral')}>Neutral</button>
        <button onClick={() => counter('bad')}>Bad</button>
      </div>
      <div>
        <h2>Statistics</h2>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
      </div>
    </>
  );
};
