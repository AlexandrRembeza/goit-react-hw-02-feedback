import { WidgetSection, Title } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <WidgetSection>
      <Title>{title}</Title>
      {children}
    </WidgetSection>
  );
};

WidgetSection.propTypes = {
  children: PropTypes.node,
};
