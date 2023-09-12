import styled from '@emotion/styled';

export const Container = styled.div(
  {
    padding: '40px',
    width: '424px',
    borderRadius: '8px',
  },
  props => ({
    backgroundColor: props.theme.colors.token10[100],
  })
);

export const LinksBox = styled.ul({
  marginBottom: '40px',
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
});
export const LinkWrap = styled.li(props => ({
  color: props.isActive
    ? props.theme.colors.token1[100]
    : props.theme.colors.token1[30],
}));
