import styled from '@emotion/styled';

export const Container = styled.header(
  {
    gridArea: 'Header',
    padding: '14px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
  },
  props => ({
    backgroundColor: props.theme.colors.header.background,
  })
);
