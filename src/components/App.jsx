import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  changeCounter = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
    console.log(this.state);
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const totalFeedbacksNumber = this.countTotalFeedback();
    if (totalFeedbacksNumber === 0) {
      return 0;
    }
    return Math.floor((this.state.good / totalFeedbacksNumber) * 100);
  };
  render() {
    let stateNew = this.state;
    const total = this.countTotalFeedback();
    console.log(total);
    return (
      <>
        <FeedbackOptions counter={this.changeCounter} />
        {total === 0 ? (
          <>
            <Notification message="There is no feedback" />
          </>
        ) : (
          <Statistics
            item={stateNew}
            totalFeedback={this.countTotalFeedback()}
            positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </>
    );
  }
}
