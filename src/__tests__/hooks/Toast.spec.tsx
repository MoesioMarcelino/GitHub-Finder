import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { ToastProvider, useToast } from '../../hooks/Toast';

describe('Toast Hook', () => {
  it('should be able to add toast', () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ToastProvider,
    });

    result.current.addToast({
      title: 'Test toast title',
      description: 'Test toast description',
    });
  });

  it('should be able to remove a toast', async () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ToastProvider,
    });

    result.current.removeToast('test-remove-toast');
  });
});
