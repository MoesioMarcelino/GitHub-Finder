import React, { createContext, useCallback, useContext, useState } from 'react';
import { StarsContainer } from '../pages/Home/styles';

export interface StartProps {
  id: number;
  user: string;
  like?: boolean;
}

interface StarContextData {
  giveStar(props: StartProps): void;
  removeStar(props: StartProps): void;
}

const StarContext = createContext<StarContextData>({} as StarContextData);

export const StarProvider: React.FC = ({ children }) => {
  const giveStar = useCallback(({ id, user, like }: StartProps) => {
    const starStoraged = localStorage.getItem('@GitHubFinder:stars-liked');

    let starsArray: StartProps[] = [];

    if (starStoraged) {
      starsArray = Object.values(JSON.parse(starStoraged));

      const findIndexStar = starsArray.findIndex(
        ({ user: userStoraged, id: idStoraged }) =>
          user === userStoraged && id === idStoraged,
      );

      if (findIndexStar > -1) {
        starsArray[findIndexStar].like = true;
      } else {
        starsArray = [...starsArray, { id, user, like }];
      }
    } else {
      starsArray = [{ id, user, like }];
    }

    localStorage.setItem(
      '@GitHubFinder:stars-liked',
      JSON.stringify(starsArray),
    );
  }, []);

  const removeStar = useCallback(({ id, user }: StartProps) => {
    const starStoraged = localStorage.getItem('@GitHubFinder:stars-liked');

    if (starStoraged) {
      const starsArray: StartProps[] = Object.values(JSON.parse(starStoraged));

      const findIndexStar = starsArray.findIndex(
        ({ id: idStoraged, user: userStoraged }) =>
          idStoraged === id && user === userStoraged,
      );

      if (findIndexStar > -1) {
        starsArray[findIndexStar].like = false;

        localStorage.setItem(
          '@GitHubFinder:stars-liked',
          JSON.stringify(starsArray),
        );
      }
    }
  }, []);

  return (
    <>
      <StarContext.Provider value={{ giveStar, removeStar }}>
        {children}
        <StarsContainer />
      </StarContext.Provider>
    </>
  );
};

export function useStar(): StarContextData {
  return useContext(StarContext);
}
