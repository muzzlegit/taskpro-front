import styled from '@emotion/styled';

export const Container = styled.header(
  {
    gridArea: 'Header',
  },
  props => ({
    backgroundColor: props.theme.colors.header.background,
  })
);
