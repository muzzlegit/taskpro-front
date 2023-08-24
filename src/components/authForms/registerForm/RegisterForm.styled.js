import styled from '@emotion/styled';

export const Container = styled.form({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '14px',
});

export const Error = styled.span({ fontSize: '12px' }, props => ({
  color: props.theme.colors.error,
}));
