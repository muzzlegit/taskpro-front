import styled from '@emotion/styled';

export const Container = styled.div({
  position: 'relative',
  width: 'fit-content',
});

export const Inputfield = styled.input(
  {
    padding: '14px 38px 14px 18px',
    borderRadius: '8px',
    fontSize: '14px',
  },
  props => ({
    backgroundColor: props.theme.colors.token3[100],
    color: props.theme.colors.token1[100],
    border: `1px solid ${props.theme.colors.token4[100]}`,
    ':focus': {
      border: `4px solid ${props.theme.colors.token4[100]}`,
    },
  })
);
