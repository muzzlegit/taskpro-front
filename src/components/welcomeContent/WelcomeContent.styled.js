import styled from '@emotion/styled';

export const Svg = styled.img(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  props => ({
    width: props.width,
    height: props.height,
  })
);
