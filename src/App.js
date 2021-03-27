import React, { Component } from 'react';
import Container from './components/Container';
import Sections from './components/Sections';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  render() {
    const buttonNames = Object.keys(this.state);
    const statisticsList = Object.entries(this.state);

    return (
      <Container>
        <Sections title="Please leave feedback">
          <FeedbackOptions options={buttonNames} />
        </Sections>
        <Sections title="Statistics">
          <Statistics itemList={statisticsList} />
        </Sections>
      </Container>
    );
  }
}

export default App;
