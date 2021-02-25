import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'info' | 'success' | 'error';
}

const types = {
  info: css`
    background: #daf0ee;
    color: #508bff;
  `,
  success: css`
    background: #cae1bb;
    color: #035c41;
  `,
  error: css`
    background: #f0b2a2;
    color: #854440;
  `,
};

export const Container = styled(animated.div)<ToastProps>`
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex: 1;
  align-items: flex-start;

  ${(props) => types[props.type || 'info']}

  & + div {
    margin-top: 10px;
  }

  > svg {
    margin-right: 10px;
  }

  div {
    flex: 1;

    span {
      font-size: 18px;
      font-weight: 700;
    }

    p {
      margin-top: 5px;
    }
  }

  button {
    background: transparent;
    border: 0;
    margin-left: 10px;
  }
`;
