import styled from '@emotion/styled';
import { theme } from 'libs';

const variants = {
  welcome: {
    wrap: { padding: '6px 0', gap: '14px' },
    icon: {
      width: '48px',
      height: '48px',
      borderRadius: '8px',
      backgroundColor: theme.colors.welcomeLogo.primary,
    },
    text: {
      fontSize: '40px',
      fontWeight: 600,
      color: theme.colors.welcomeLogo.text,
    },
    iconBox: {
      width: '18px',
      height: '24px',
      fill: theme.colors.welcomeLogo.icon,
    },
  },
  user: {
    wrap: { gap: '8px' },
    icon: { width: '32px', height: '32px', borderRadius: '8px' },
    text: { fontSize: '16px', fontWeight: 600 },
    iconBox: { width: '12px', height: '16px' },
  },
};

export const Wrap = styled.div(
  {
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
  },
  props => ({
    ...variants[props.variant]?.wrap,
  })
);
export const Icon = styled.div(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  props => ({
    ...variants[props.variant]?.icon,
  })
);
export const IconBox = styled.div({}, props => ({
  ...variants[props.variant]?.iconBox,
}));
export const Text = styled.span({}, props => ({
  ...variants[props.variant]?.text,
}));
