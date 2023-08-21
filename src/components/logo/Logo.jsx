import PropTypes from 'prop-types';

import { SvgIcon } from 'components';

import { Wrap, Icon, IconBox, Text } from './Logo.styled';

const Logo = ({ variant }) => {
  return (
    <a href="/">
      <Wrap variant={variant}>
        <Icon variant={variant}>
          <IconBox variant={variant}>
            <SvgIcon svgName="icon-logo" />
          </IconBox>
        </Icon>

        <Text variant={variant}>Task Pro</Text>
      </Wrap>
    </a>
  );
};

export default Logo;

Logo.propTypes = {
  variant: PropTypes.oneOf(['welcome', 'user']).isRequired,
};
