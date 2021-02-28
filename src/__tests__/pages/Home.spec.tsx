import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import gitHubAPI from '../../services/api/github';

import Home from '../../pages/Home';

const mockedAddToast = jest.fn();
const apiGitHubMock = new MockAdapter(gitHubAPI);

jest.mock('../../hooks/Toast', () => ({
  useToast: () => ({
    addToast: mockedAddToast,
  }),
}));

describe('Home Page', () => {
  it('should be able to search for an existing user', async () => {
    const { getByPlaceholderText, getByText } = render(<Home />);

    const inputNickname = getByPlaceholderText('Type user nickname here');
    const buttonSearch = getByText('Search');

    const nickname = 'moesiomarcelino';

    fireEvent.change(inputNickname, { target: { value: nickname } });
    fireEvent.click(buttonSearch);

    apiGitHubMock.onGet(`/${nickname}`).reply(200, {
      login: 'moesiomarcelino',
    });

    const { data: userReturned } = await gitHubAPI.get(`/${nickname}`);

    apiGitHubMock.onGet(`/${nickname}/starred`).reply(200, {});

    const { data: starsReturned } = await gitHubAPI.get(`/${nickname}/starred`);

    await waitFor(() => {
      expect(mockedAddToast).toHaveBeenCalled();
    });
  });

  it('should not be able to search without one nickname defined on input', async () => {
    const { getByText } = render(<Home />);

    const buttonSearch = getByText('Search');
    fireEvent.click(buttonSearch);

    await waitFor(() => {
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'error' }),
      );
    });
  });

  it('should displayed a message from user not found', async () => {
    const { getByPlaceholderText, getByText } = render(<Home />);

    const inputNickname = getByPlaceholderText('Type user nickname here');
    const buttonSearch = getByText('Search');

    const nickname = 'user-test-not-found';

    fireEvent.change(inputNickname, {
      target: { value: nickname },
    });
    fireEvent.click(buttonSearch);

    apiGitHubMock.onGet(`/${nickname}`).reply(404);

    // Test toast info
    await waitFor(() => {
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'info' }),
      );
    });

    act(() => {
      gitHubAPI.get(`/${nickname}`);
    });
  });
});
