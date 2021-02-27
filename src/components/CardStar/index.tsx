import React from 'react';
import { FiGitBranch, FiStar, FiThumbsUp } from 'react-icons/fi';

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
  name: string;
  avatar_url: string;
  description: string;
  forks_count: number;
  stargazers_count: number;
}

const CardStar: React.FC<IStarProps> = ({
  name,
  avatar_url,
  description,
  forks_count,
  stargazers_count,
}) => (
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
    <LikeContainer>
      <Counter>10</Counter>
      <FiThumbsUp size={16} />
    </LikeContainer>
  </Container>
);

export default CardStar;
