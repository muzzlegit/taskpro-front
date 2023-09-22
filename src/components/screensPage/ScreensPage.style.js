import styled from '@emotion/styled';

export const Section = styled.section(
  {
    gridArea: 'Screens',
  },
  props => ({
    backgroundColor: props.theme.colors.screens.background,
  })
);
