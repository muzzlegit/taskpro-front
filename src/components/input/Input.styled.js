import styled from '@emotion/styled';

export const Wrap = styled.div({
  position: 'relative',
  width: '100%',
});

export const Inputfield = styled.input(
  {
    position: 'relative',
    padding: '14px 38px 14px 18px',
    width: '100%',
    borderRadius: '8px',
    fontSize: '14px',
  },
  props => ({
    backgroundColor: props.theme.colors.input.bg,
    color: props.theme.colors.input.text,
    border: `1px solid ${
      props.isError ? props.theme.colors.error : props.theme.colors.input.border
    }`,
    ':focus': {
      border: `2px solid ${
        props.isError
          ? props.theme.colors.error
          : props.theme.colors.input.border
      }`,
    },
  })
);

export const IconWrap = styled.div({
  position: 'absolute',
  zIndex: '2',
  top: '50%',
  right: '18px',
  transform: 'translate(0, -50%)',
  cursor: 'pointer',
});

export const Textarea = styled.textarea(
  {
    resize: 'none',
    padding: '14px 18px',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
  },
  props => ({
    height: props.height,
    backgroundColor: props.theme.colors.token3[100],
    color: props.theme.colors.token1[100],
    border: `1px solid ${
      props.isError ? props.theme.colors.error : props.theme.colors.token4[80]
    }`,
    ':focus': {
      border: `2px solid ${
        props.isError
          ? props.theme.colors.error
          : props.theme.colors.token4[100]
      }`,
    },
  })
);
