import React, { Component } from 'react';
import s from './Feedback.module.css';
import FeedBackOptions from './FeedBackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';

class Feedback extends Component {
  static defaultProps = {
    // задаю дефолтные значения (они задаются до стейта)
    initialValue: 0,
  };
  // Babel, встроеный в реакт транспилирует такой стейт в constructor
  // после изменения любого свойства стейта будет авто-ки запускаться render
  // переданные значение через App.js доступны через this.props.__prop_name__
  state = {
    good: this.props.initialValue,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    const stateArray = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={stateArray}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {good > 0 || neutral > 0 || bad > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percent={percent}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default Feedback;
