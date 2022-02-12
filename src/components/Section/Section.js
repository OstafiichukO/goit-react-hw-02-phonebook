import PropTypes from 'prop-types';
import { StyledSection, StyledDiv } from './Section.styled';

const Section = ({ title }) => {
  return (
    <StyledSection>
      <StyledDiv>
        <h3>{title}</h3>
      </StyledDiv>
    </StyledSection>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
