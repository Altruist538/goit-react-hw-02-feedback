import { Component } from 'react';
import { QuizCounter } from './QuizCounter/QuizCounter';
export class App extends Component {
  state = {
    good: 2,
    neutral: 3,
    bad: 4,
  };
  changeCounter = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
    console.log(this.state);
  };

  render() {
    let stateNew = this.state;
    console.log(stateNew);
    return <QuizCounter item={stateNew} counter={this.changeCounter} />;
  }
}
