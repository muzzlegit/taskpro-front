import PropTypes from 'prop-types';
import sprite from 'assets/icons/sprite.svg';

import { Svg } from './svgIcon.styled';

const SvgIcon = ({ svgName, size, stroke = 'none', fill, ...rest }) => {
  return (
    <Svg
      width={size ?? '100%'}
      height={size ?? '100%'}
      stroke={stroke}
      fill={fill ?? 'inherit'}
      {...rest}
    >
      <use href={sprite + `#${svgName}`}></use>
    </Svg>
  );
};

export default SvgIcon;

SvgIcon.propTypes = {
  svgName: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stroke: PropTypes.string,
  fill: PropTypes.string,
};
