import React from 'react';
import { useTransition } from 'react-spring';

import { ToastProps } from '../../hooks/Toast';

import Toast from './Toast';

import { Container } from './styles';

interface ToastContainerProps {
  toasts: ToastProps[];
}

const ToastComponent: React.FC<ToastContainerProps> = ({ toasts }) => {
  const toastsWithTransition = useTransition(toasts, (toast) => toast.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <Container>
      {toastsWithTransition.map(({ item, key, props }) => (
        <Toast key={key} toast={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastComponent;
