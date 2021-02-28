import React, { useEffect, useState } from 'react';
import { FiGitBranch, FiStar, FiThumbsUp } from 'react-icons/fi';
import { StartProps, useStar } from '../../hooks/Star';

import {
  Container,
  Name,
  Description,
  StatusContainer,
  Status,
  ContentContainer,
  LikeContainer,
  Counter,
} from './styles';

export interface IStarProps {
  id: number;
  user: string;
  name: string;
  avatar_url: string;
  description: string;
  forks_count: number;
  stargazers_count: number;
}

const CardStar: React.FC<IStarProps> = ({
  id,
  name,
  user,
  avatar_url,
  description,
  forks_count,
  stargazers_count,
}) => {
  const { giveStar, removeStar } = useStar();

  const [counter, setCounter] = useState(() => {
    const stars = localStorage.getItem('@GitHubFinder:stars-liked');

    if (stars) {
      const starsParsed: StartProps[] = Object.values(JSON.parse(stars));

      const starFinded = starsParsed.find(
        ({ id: idStoraged, user: userStoraged }) =>
          idStoraged === id && userStoraged === user,
      );

      if (starFinded?.id === id) {
        return 1;
      }
    }
    return 0;
  });

  useEffect(() => {});

  function handleLikeStar() {
    if (counter === 1) {
      setCounter(0);
      removeStar({ id, user, like: false });
    } else {
      setCounter(1);
      giveStar({ id, user, like: true });
    }
  }

  return (
    <Container>
      <ContentContainer>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <StatusContainer>
          <Status>
            <FiGitBranch size={16} />
            {forks_count}
          </Status>
          <Status>
            <FiStar size={16} />
            {stargazers_count}
          </Status>
        </StatusContainer>
      </ContentContainer>
      <LikeContainer
        like={!!counter}
        onClick={handleLikeStar}
        data-testid="like-container"
      >
        <Counter data-testid="counter-like">{counter}</Counter>
        <FiThumbsUp size={16} />
      </LikeContainer>
    </Container>
  );
};

export default CardStar;
