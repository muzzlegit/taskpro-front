import styled from '@emotion/styled';

const variants = {
  info: {
    size: '32px',
  },
  popUp: {
    size: '68px',
  },
};

export const Container = styled.div(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  props => ({
    width: variants[props.variant].size,
    height: variants[props.variant].size,
  })
);

export const Picture = styled.div(
  props => ({
    position: 'relative',
    width: '100%',
    height: '100%',

    '::before': {
      position: 'absolute',
      zIndex: '2',
      top: '30%',
      left: '50%',
      transform: 'translate( -50%, 0)',
      content: '""',
      borderRadius: '50%',
    },
    '::after': {
      position: 'absolute',
      zIndex: '2',
      bottom: '0',
      left: '50%',
      transform: 'translate( -50%, 54%)',
      content: '""',
      borderRadius: '50%',
    },
  }),
  props => ({
    backgroundColor: props.theme.colors.userInfo.avatarBackground,
    '::before': {
      width: `${Number.parseInt(variants[props.variant].size) * 0.338}px`,
      height: `${Number.parseInt(variants[props.variant].size) * 0.338}px`,
      backgroundColor: props.theme.colors.userInfo.avatarPicture,
    },
    '::after': {
      width: `${Number.parseInt(variants[props.variant].size) * 0.824}px`,
      height: `${Number.parseInt(variants[props.variant].size) * 0.824}px`,
      backgroundColor: props.theme.colors.userInfo.avatarPicture,
    },
  })
);
