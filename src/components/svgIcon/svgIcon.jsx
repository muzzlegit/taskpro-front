import sprite from 'assets/icons/sprite.svg';
import PropTypes from 'prop-types';

import { Svg } from './SvgIcon.styled';

const SvgIcon = ({ svgName, size, stroke, fill, onChange, ...rest }) => {
  return (
    <Svg
      width={size ?? '100%'}
      height={size ?? '100%'}
      stroke={stroke ?? 'inherit'}
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
