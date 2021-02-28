import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';
import { ToastProps, useToast } from '../../../hooks/Toast';
import { Container } from './styles';

interface ToastData {
  toast: ToastProps;
  style: object;
}

const icons = {
  info: <FiInfo size={20} />,
  success: <FiCheckCircle size={20} />,
  error: <FiAlertCircle size={20} />,
};

const Toast: React.FC<ToastData> = ({ toast, style }) => {
  const { removeToast } = useToast();

  const { id, title, type, description } = toast;

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  return (
    <Container type={type} style={style}>
      {icons[type || 'info']}
      <div>
        <span>{title}</span>
        <p>{description}</p>
      </div>
      <button
        onClick={() => removeToast(id)}
        type="button"
        data-testid="button-remove-toast"
      >
        <FiXCircle size={20} />
      </button>
    </Container>
  );
};

export default Toast;
