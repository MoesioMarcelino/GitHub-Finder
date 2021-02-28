import { renderHook } from '@testing-library/react-hooks';
import { StarProvider, useStar } from '../../hooks/Star';

describe('Star Hook', () => {
  it('should be able to give star', () => {
    const { result } = renderHook(() => useStar(), {
      wrapper: StarProvider,
    });

    result.current.giveStar({
      id: 123456,
      like: true,
      user: 'MoesioMarcelino',
    });
  });

  it('should be able to give star storaged in localStorage', () => {
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

    const { result } = renderHook(() => useStar(), {
      wrapper: StarProvider,
    });

    result.current.giveStar({
      id: 123456,
      like: true,
      user: 'MoesioMarcelino',
    });
  });

  it('should be able to remove like', async () => {
    const { result } = renderHook(() => useStar(), {
      wrapper: StarProvider,
    });

    result.current.removeStar({
      id: 123456,
      like: false,
      user: 'MoesioMarcelino',
    });
  });
});
