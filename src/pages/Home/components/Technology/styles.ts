import styled from "styled-components";

import color from "../../../../styles/colors";

import ContainerDefault from "../../../../styles/components/container";

export const Article = styled.article`
  background: ${color.trueBlack};
  box-shadow: inset 0 80px ${color.white}, inset 0 -80px ${color.white};

  @media (max-width: 800px) {
    box-shadow: initial;
  }
`;

export const Container = styled(ContainerDefault)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  padding: 160px 0;

  & > div > div > p:first-child {
    margin-bottom: 32px;
  }

  & > button {
    margin-bottom: 80px;
    margin-top: 20px;
  }

  @media (max-width: 800px) {
    padding: 0 60px;

    & > button {
      margin-bottom: 60px;
    }
  }
`;

export const Benefits = styled.div`
  display: flex;
  gap: 40px;

  & > p:first-child {
    margin-bottom: 8px;
    width: max-content;
  }

  & > img {
    width: 24px;
    margin-bottom: 8px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  object-position: left;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
