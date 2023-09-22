import styled from '@emotion/styled';

export const Aside = styled.aside(
  {
    gridArea: 'Sidebar',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  props => ({
    backgroundColor: props.theme.colors.sidebar.background,
  })
);
