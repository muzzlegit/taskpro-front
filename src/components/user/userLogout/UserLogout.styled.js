import styled from '@emotion/styled';

export const Container = styled.div(
  {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 500,
    fill: 'none',
  },
  props => ({
    color: props.theme.colors.logout.text,
    stroke: props.theme.colors.logout.icon,
  })
);
