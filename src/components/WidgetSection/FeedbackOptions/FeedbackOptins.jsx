import {
  Wrapper,
  ButtonBad,
  ButtonGood,
  ButtonNeutral,
} from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <ButtonGood data-action="goodReview">Good</ButtonGood>
      <ButtonNeutral data-action="neutralReview">Neutral</ButtonNeutral>
      <ButtonBad data-action="badReview">Bad</ButtonBad>
    </Wrapper>
  );
};

Wrapper.propTypes = {
  onClick: PropTypes.func.isRequired,
};
