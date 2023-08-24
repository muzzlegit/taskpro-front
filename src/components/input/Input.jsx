import PropTypes from 'prop-types';

import { SvgIcon } from 'components';

import { Inputfield, IconWrap, Textarea, Wrap } from './Input.styled';
import { theme } from 'libs';
import { useState } from 'react';

function Input({
  type,
  name,
  placeholder,
  onChange,
  value,
  textarea,
  height,
  ...rest
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {textarea ? (
        <Textarea
          height={height}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          {...rest}
        />
      ) : (
        <Wrap>
          <Inputfield
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            {...rest}
          />
          {type === 'password' ? (
            <IconWrap
              onClick={() => {
                setShowPassword(prev => !prev);
              }}
            >
              <SvgIcon
                svgName={showPassword ? 'icon-eye' : 'icon-eye-close'}
                fill={theme.colors.token1[40]}
                size="18px"
              />
            </IconWrap>
          ) : null}
        </Wrap>
      )}
    </>
  );
}

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
  height: PropTypes.string,
};
