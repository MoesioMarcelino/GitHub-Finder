import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToastContainer from '../components/ToastContainer';

export interface ToastProps {
  id: string;
  title: string;
  type?: 'info' | 'success' | 'error';
  description?: string;
}

interface ToastContextData {
  addToast(props: Omit<ToastProps, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = useCallback(
    ({ description, title, type }: Omit<ToastProps, 'id'>) => {
      const toast: ToastProps = {
        id: uuidv4(),
        description,
        title,
        type,
      };

      setToasts((state) => [...state, toast]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((data) => data.filter((toast) => toast.id !== id));
  }, []);

  return (
    <>
      <ToastContext.Provider value={{ addToast, removeToast }}>
        {children}
        <ToastContainer toasts={toasts} />
      </ToastContext.Provider>
    </>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast should be used within a ToastProvider');
  }

  return context;
}
