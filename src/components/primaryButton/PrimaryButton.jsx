import PropTypes from 'prop-types';

import { SvgIcon } from 'components';

import { Button, Icon } from './PrimaryButton.styled';

const PrimaryButton = ({ type, icon, children, ...reset }) => {
  return (
    <Button type={type} {...reset}>
      {icon ? (
        <Icon>
          <SvgIcon svgName="icon-plus" size="14px" />
        </Icon>
      ) : null}

      {children}
    </Button>
  );
};

export default PrimaryButton;

PrimaryButton.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.bool,
  children: PropTypes.string,
};
