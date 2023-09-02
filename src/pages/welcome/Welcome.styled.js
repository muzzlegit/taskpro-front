import styled from '@emotion/styled';

export const Container = styled.div(
  {
    margin: '0 auto',
    maxWidth: '473px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  props => ({
    [`@media (max-width:${props.theme.breackPoints.tablet})`]: {
      padding: '0 20px',
    },
  })
);

export const Img = styled.img(
  {
    margin: '0 auto 14px 0',
    width: '162px',
    height: '162px',
  },
  props => ({
    [`@media (max-width:${props.theme.breackPoints.mobile})`]: {
      width: '124px',
      height: '124px',
    },
  })
);
export const Text = styled.p(
  {
    margin: '24px 0 48px 0',
    fontSize: '14px',
    lineHeight: '1.27',
    textAlign: 'center',
  },
  props => ({
    color: props.theme.colors.welcomPrimary,
  })
);
export const Button = styled.div(
  {
    padding: '14px',
    width: '100%',
    maxWidth: '344px',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.5,
    cursor: 'pointer',
    border: 'none',
    borderRadius: '8px',
  },
  props => ({
    color: props.isActive
      ? props.theme.colors.token1[100]
      : props.theme.colors.welcomPrimary,
    backgroundColor: props.isActive
      ? props.theme.colors.welcomPrimary
      : 'transparent',
  })
);
