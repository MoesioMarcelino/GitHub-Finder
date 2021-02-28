import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { renderHook } from '@testing-library/react-hooks';
import Toast from '../../components/ToastContainer/Toast';
import { ToastProvider, useToast } from '../../hooks/Toast';

jest.mock('../../hooks/Toast', () => ({
  useToast: () => ({
    removeToast: jest.fn(),
  }),
}));

describe('Toast Component', () => {
  it('should be able to remove a toast', async () => {
    const idToast = 'test-remove-toast';

    const { getByTestId } = render(
      <Toast
        toast={{
          id: idToast,
          title: 'Test remove toast',
          description: 'Test remove toast',
        }}
        style={{}}
      />,
    );

    const buttonRemoveToast = getByTestId('button-remove-toast');

    fireEvent.click(buttonRemoveToast);

    const { result } = renderHook(() => useToast(), {
      wrapper: ToastProvider,
    });

    result.current.removeToast(idToast);
  });
});
