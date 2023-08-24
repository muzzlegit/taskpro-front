import styled from '@emotion/styled';

export const Container = styled.div(
  {
    padding: '40px',
    width: '424px',
    borderRadius: '8px',
  },
  props => ({
    backgroundColor: props.theme.colors.token5[100],
  })
);
