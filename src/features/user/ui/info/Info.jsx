import PropTypes from 'prop-types';
import { Name } from './Info.styled';

const Info = ({ userName }) => {
  return <Name>{userName}</Name>;
};

export default Info;

Info.propTypes = {
  userName: PropTypes.string.isRequired,
};
