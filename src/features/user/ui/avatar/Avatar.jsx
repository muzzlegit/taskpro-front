import PropTypes from 'prop-types';

import { Container, Picture } from './Avatar.styled';

const Avatar = ({ avatar, variant }) => {
  return (
    <Container variant={variant}>
      {avatar ? (
        <img src={avatar} alt="User Avatar" />
      ) : (
        <Picture variant={variant} />
      )}
    </Container>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.string,
  variant: PropTypes.oneOf(['info', 'popUp']),
};

export default Avatar;
