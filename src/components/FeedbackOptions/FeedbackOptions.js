import { Topic, Button, WrapperButton } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ counter }) => {
  return (
    <>
      <WrapperButton>
        <Topic>Please leave feedback</Topic>
        <Button onClick={() => counter('good')}>Good</Button>
        <Button onClick={() => counter('neutral')}>Neutral</Button>
        <Button onClick={() => counter('bad')}>Bad</Button>
      </WrapperButton>
    </>
  );
};
