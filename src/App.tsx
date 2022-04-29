import React, { Component } from 'react';
import Container from './components/Container';
import Sections from './components/Sections';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

interface IState {
  good: number;
  neutral: number;
  bad: number;
  'positive feedback'?: number;
}

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleButton = (buttonName: string) => {
    this.setState((prevState: IState) => {
      if (buttonName === 'good') return { good: prevState.good + 1 };
      if (buttonName === 'bad') return { bad: prevState.bad + 1 };
      if (buttonName === 'neutral') return { neutral: prevState.neutral + 1 };
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const buttonNames = Object.keys(this.state);
    const stateList = Object.entries(this.state);

    const statisticsList = Object.entries({
      ...this.state,
      total: this.countTotalFeedback(),
      'positive feedback': this.countPositiveFeedbackPercentage() || 0,
    });

    return (
      <Container>
        <Sections title="Please leave feedback:">
          <FeedbackOptions
            options={buttonNames}
            onClickButton={this.handleButton}
          />
        </Sections>
        <Sections title="Statistics:">
          {this.countTotalFeedback() ? (
            <Statistics itemList={statisticsList} />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Sections>
      </Container>
    );
  }
}

export default App;
