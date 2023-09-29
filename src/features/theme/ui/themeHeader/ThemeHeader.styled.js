import styled from '@emotion/styled';

export const Container = styled.div(
  {
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
  },
  props => ({
    color: props.theme.colors.themeSelector.text,
    stroke: props.theme.colors.themeSelector.icon,
  })
);
