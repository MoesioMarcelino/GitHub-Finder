import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import CardStar from '../../components/CardStar';

const mockedGiveStar = jest.fn();
const mockedRemoveStar = jest.fn();

jest.mock('../../hooks/Star', () => ({
  useStar: () => ({
    giveStar: mockedGiveStar,
    removeStar: mockedRemoveStar,
  }),
}));

describe('CardStar Component', () => {
  beforeEach(() => {
    global.localStorage.clear();
  });

  it('should be able to render a star card', () => {
    render(
      <CardStar
        id={123456}
        user="MoesioMarcelino"
        name="Test Star Repository"
        avatar_url="https://api.github.com/users/moesiomarcelino.png"
        description="test"
        forks_count={20}
        stargazers_count={20}
      />,
    );
  });

  it('should be able to render a star card saved in localStorage', async () => {
    const stars = [
      {
        id: 123456,
        like: true,
        user: 'MoesioMarcelino',
      },
    ];

    global.localStorage.setItem(
      '@GitHubFinder:stars-liked',
      JSON.stringify(stars),
    );

    render(
      <CardStar
        id={123456}
        user="MoesioMarcelino"
        name="Test Star Repository"
        avatar_url="https://api.github.com/users/moesiomarcelino.png"
        description="test"
        forks_count={20}
        stargazers_count={20}
      />,
    );
  });

  it('should be able to like a repository', async () => {
    const stars = [
      {
        id: 123456,
        like: false,
        user: 'MoesioMarcelino',
      },
    ];

    global.localStorage.setItem(
      '@GitHubFinder:stars-liked',
      JSON.stringify(stars),
    );

    const { getByTestId } = render(
      <CardStar
        id={123456}
        user="MoesioMarcelino"
        name="Test Star Repository"
        avatar_url="https://api.github.com/users/moesiomarcelino.png"
        description="test"
        forks_count={20}
        stargazers_count={20}
      />,
    );

    const counterContainer = getByTestId('like-container');
    const counter = getByTestId('counter-like').textContent;

    fireEvent.click(counterContainer);

    expect(Number(counter)).toEqual(1);
  });

  it('should be able to unlike a repository', async () => {
    const { getByTestId } = render(
      <CardStar
        id={123456}
        user="MoesioMarcelino"
        name="Test Star Repository"
        avatar_url="https://api.github.com/users/moesiomarcelino.png"
        description="test"
        forks_count={20}
        stargazers_count={20}
      />,
    );

    const counterContainer = getByTestId('like-container');
    const counter = getByTestId('counter-like').textContent;

    fireEvent.click(counterContainer);

    expect(Number(counter)).toEqual(0);
  });
});
