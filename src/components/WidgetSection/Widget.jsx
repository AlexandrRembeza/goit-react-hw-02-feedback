import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptins';
import { Statistics } from './Statistics/Statistics';
import PropTypes from 'prop-types';

export class Widget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }

    const { action } = e.target.dataset;

    this.setState(prevState => {
      return {
        [action]: prevState[action] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((100 / total) * this.state.good);
  };

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onClick={this.handleIncrement} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
