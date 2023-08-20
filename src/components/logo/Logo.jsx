import PropTypes from 'prop-types';

import { SvgIcon } from 'components';

import { Wrap, Icon, IconBox, Text } from './Logo.styled';

const Logo = ({ variant }) => {
  return (
    <Wrap variant={variant}>
      <Icon variant={variant}>
        <IconBox variant={variant}>
          <SvgIcon svgName="icon-logo" />
        </IconBox>
      </Icon>
      <a href="/">
        <Text variant={variant}>Task Pro</Text>
      </a>
    </Wrap>
  );
};

export default Logo;

Logo.propTypes = {
  variant: PropTypes.oneOf(['welcome', 'user']).isRequired,
};
