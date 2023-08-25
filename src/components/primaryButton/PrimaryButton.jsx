import { SvgIcon } from 'components';

import { Button, Icon } from './PrimaryButton.styled';

const PrimaryButton = ({ variant, type, icon, children, ...reset }) => {
  return (
    <Button type={type} variant={variant} {...reset}>
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
