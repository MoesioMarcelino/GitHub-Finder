import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;

  display: flex;
  flex-direction: column;
`;

export const SectionInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const UserImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-right: 24px;

  @media (max-width: 1200px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInfoHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  @media (max-width: 1200px) {
    margin-bottom: 10px;
  }
`;

export const UserInfo = styled.div`
  padding-right: 30px;
`;

export const Nickname = styled.span``;

export const LinkContainer = styled.a`
  text-decoration: none;
  background-color: #04d361;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background 0.4s;
  cursor: pointer;
  color: #fff;

  display: flex;
  align-items: center;

  &:hover {
    background: #05a54d;
  }

  svg {
    margin-left: 5px;
    color: #fff;
  }
`;

export const Username = styled.h2`
  font-size: 24px;
`;

export const Bio = styled.p`
  text-align: justify;
  font-size: 16px;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    margin-bottom: 10px;
  }
`;

export const StatusContainer = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
  }

  & + div {
    margin-left: 20px;
  }
`;

export const SectionMapContainer = styled.div`
  margin-top: 20px;
  padding: 20px 0 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > span {
    margin-top: 20px;
  }
`;

export const NotFoundImg = styled.img`
  width: 320px;
`;
