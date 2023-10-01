import styled from '@emotion/styled';

export const Name = styled.p(
  {
    fontSize: '14px',
    fontWeight: 500,
  },
  props => ({
    color: props.theme.colors.userInfo.text,
  })
);
