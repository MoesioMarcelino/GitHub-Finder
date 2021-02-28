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

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const stars = localStorage.getItem('@GitHubFinder:stars-liked');

    if (stars) {
      const starsParsed: StartProps[] = Object.values(JSON.parse(stars));

      const starFinded = starsParsed.find(
        ({ id: idStoraged, user: userStoraged }) =>
          idStoraged === id && userStoraged === user,
      );

      setCounter(starFinded?.like ? 1 : 0);
    } else {
      setCounter(0);
    }
  });

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
      <LikeContainer like={!!counter} onClick={handleLikeStar}>
        {counter !== 0 && <Counter>{counter}</Counter>}
        <FiThumbsUp size={16} />
      </LikeContainer>
    </Container>
  );
};

export default CardStar;
