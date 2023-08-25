import styled from '@emotion/styled';
import { theme } from 'libs';

const variants = {
  welcome: {
    button: {
      color: theme.colors.welcomePrimaryBtn.text,
      backgroundColor: theme.colors.welcomePrimaryBtn.primary,
      ':hover,:focus': {
        backgroundColor: theme.colors.welcomePrimaryBtn.acent,
      },
    },
  },
  user: {
    button: {
      color: theme.colors.primaryBtn?.text,
      backgroundColor: theme.colors.primaryBtn?.primary,
      ':hover,:focus': {
        backgroundColor: theme.colors.primaryBtn?.acent,
      },
    },
  },
};

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
    ...variants[props.variant]?.button,
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
