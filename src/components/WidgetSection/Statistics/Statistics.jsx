import { Subtitle } from './Statistics.styled';
import { Notification } from './Statistics.styled';
import {
  GoodReviews,
  NeutralReviews,
  BadReviews,
  TotalReviews,
  PositiveFeedback,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Subtitle>Statistics</Subtitle>
      {good + bad + neutral !== 0 ? (
        <>
          <GoodReviews>Good: {good}</GoodReviews>
          <NeutralReviews>Neutral: {neutral}</NeutralReviews>
          <BadReviews>Bad: {bad}</BadReviews>
          <TotalReviews>Total: {total}</TotalReviews>
          <PositiveFeedback>
            Positive feedback: {positivePercentage ? positivePercentage : 0}%
          </PositiveFeedback>
        </>
      ) : (
        <Notification>There is no feedback</Notification>
      )}
    </>
  );
};
