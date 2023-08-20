import styled from '@emotion/styled';

export const Section = styled.section(
  {
    padding: '166px 484px',
    width: '100%',
    height: '100vh',
  },
  props => ({
    background: props.theme.welcomBg,
  })
);
