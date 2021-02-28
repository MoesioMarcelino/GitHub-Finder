import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: transform 0.4s;

  &:hover {
    transform: translateX(10px);
  }

  & + div {
    margin-top: 10px;
  }
`;

export const ContentContainer = styled.div`
  padding-right: 20px;
`;

export const Name = styled.h3`
  margin-bottom: 15px;
`;

export const Description = styled.p`
  text-align: justify;
  margin-bottom: 15px;
`;

export const StatusContainer = styled.div`
  display: flex;
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

interface LikeProps {
  like: boolean;
}

export const LikeContainer = styled.div<LikeProps>`


  min-width: 80px;
  min-height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.like ? '#04d361' : '#fff')};
  border: ${(props) => (props.like ? 'none' : '3px solid #04d361')};
  border-radius: 10px;
  cursor: pointer;

  display: flex;

  transition: background 0.4s;

  svg {
    margin-left: 10px;
  }

  &:hover {
    background: ${(props) => (props.like ? '#05a54d' : '#04d361')} ;
  }
`;

export const Counter = styled.div`
  margin-top: 3px;
`;
