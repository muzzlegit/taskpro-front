import styled from '@emotion/styled';

export const Aside = styled.aside(
  {
    gridArea: 'Sidebar',
  },
  props => ({
    backgroundColor: props.theme.colors.sidebar.background,
  })
);

export const LogoWrap = styled.div({
  padding: '24px',
});
