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
      <ButtonGood data-action="good">Good</ButtonGood>
      <ButtonNeutral data-action="neutral">Neutral</ButtonNeutral>
      <ButtonBad data-action="bad">Bad</ButtonBad>
    </Wrapper>
  );
};

Wrapper.propTypes = {
  onClick: PropTypes.func.isRequired,
};
