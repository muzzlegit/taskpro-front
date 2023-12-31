import styled from '@emotion/styled';

export const Button = styled.button(
  {
    padding: '14px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    borderRadius: '8px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  props => ({
    color: props.theme.colors.primaryBtn.text,
    backgroundColor: props.theme.colors.primaryBtn.primary,
    ':hover,:focus': {
      backgroundColor: props.theme.colors.primaryBtn.acent,
    },
  })
);
export const Icon = styled.span(
  {
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '6px',
  },
  props => ({
    backgroundColor: props.theme.colors.primaryBtn.icon,
    stroke: props.theme.colors.primaryBtn.stroke,
  })
);
