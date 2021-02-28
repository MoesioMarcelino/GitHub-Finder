import React from 'react';

import { StarProvider } from './Star';
import { ToastProvider } from './Toast';

const AppProvider: React.FC = ({ children }) => (
  <StarProvider>
    <ToastProvider>{children}</ToastProvider>
  </StarProvider>
);

export default AppProvider;
