import styled from '@emotion/styled';

export const Section = styled.section(
  {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  props => ({
    background: props.theme.welcomBg,
  })
);
