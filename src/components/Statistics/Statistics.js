import { Topic, Wrapper, Text } from './Statistics.styled';

export const Statistics = ({
  item: { good, neutral, bad },
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <>
      <Wrapper>
        <>
          <Topic>Statistics</Topic>
          <Text>Good: {good}</Text>
          <Text>Neutral: {neutral}</Text>
          <Text>Bad: {bad}</Text>
          <Text>Total: {totalFeedback}</Text>
          <Text>Positive feedback: {positiveFeedbackPercentage}%</Text>
        </>
      </Wrapper>
    </>
  );
};
