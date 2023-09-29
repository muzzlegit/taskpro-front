import styled from '@emotion/styled';

export const Container = styled.div(
  {
    position: 'absolute',
    top: '110%',
    right: 0,
    zIndex: 3,
    padding: '18px',
    width: '100px',
    border: '1px solid',
    borderRadius: '8px',
  },
  props => ({
    backgroundColor: props.theme.colors.themeSelector.listBackground,
    borderColor: props.theme.colors.themeSelector.listBorder,
  })
);

export const List = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '4px',
});

export const Item = styled.li(
  {
    width: '100%',
    fontSize: '14px',
    cursor: 'pointer',
  },
  props => ({
    ':hover,:focus': {
      color: props.theme.colors.themeSelector.acent,
    },
    color: props.theme.colors.themeSelector.listText,
  })
);
