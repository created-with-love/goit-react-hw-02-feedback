import React, { Component } from 'react';
import s from './Feedback.module.css';
import Controls from './FeedbackOptions.jsx';
import Statistics from './Statistics';
import Notification from './Notification';

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
    total: 0,
    percent: 0,
  };

  handleGoodBtn = () => {
    // изменять состояния напрямую нельзя
    // this.state.good = 5; XXX
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  handleNeutralBtn = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  handleBadBtn = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.good + prevState.bad + prevState.neutral,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        percent: Math.floor((prevState.good / prevState.total) * 100),
      };
    });
  };

  render() {
    const { good, neutral, bad, total, percent } = this.state;
    return (
      <>
        <h1>Please leave feedback</h1>

        <Controls
          onHandleGoodBtn={this.handleGoodBtn}
          onHandleNeutralBtn={this.handleNeutralBtn}
          onHandleBadBtn={this.handleBadBtn}
        />
        {good > 0 || neutral > 0 || bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percent={percent}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default Feedback;
