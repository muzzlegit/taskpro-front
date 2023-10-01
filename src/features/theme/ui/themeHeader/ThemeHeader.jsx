import PropTypes from 'prop-types';
import { Container } from './ThemeHeader.styled';

const ThemeHeader = ({ icon }) => {
  return (
    <Container>
      <span>Theme</span>
      {icon}
    </Container>
  );
};

export default ThemeHeader;

ThemeHeader.propTypes = {
  icon: PropTypes.element.isRequired,
};
