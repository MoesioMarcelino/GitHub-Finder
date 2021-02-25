import styled, { css } from "styled-components";

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Logo = styled.img``;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    min-width: 500px;
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    font-size: 16px;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    border: 0;
    border-radius: 0 5px 5px 0;
    background: #04d361;
    color: #fff;
    font-weight: bold;
    transition: background 0.4s;

    &:hover {
      background: #05a54d;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

interface SectionProps {
  width?: number;
  hasContent?: boolean;
}

export const Sections = styled.div<SectionProps>`
  margin-top: 40px;

  display: flex;
  ${(props) =>
    props.hasContent
      ? css`
          justify-content: center;
          align-items: flex-start;
        `
      : css`
          align-items: center;
          justify-content: center;
        `}
`;

export const Section = styled.div<SectionProps>`
  width: ${(props) => props.width}%;

  & + div {
    margin-left: 20px;
  }
`;

export const WithoutContentImg = styled.img`
  margin-top: 50px;
  width: 500px;
`;

export const StarsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
