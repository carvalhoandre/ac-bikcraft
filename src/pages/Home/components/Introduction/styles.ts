import styled from "styled-components";

import color from "../../../../styles/colors";

import ContainerDefault from "../../../../styles/components/container";

export const Main = styled.main`
  background: ${color.trueBlack} url("../../../../assets/dec/bottom-left.svg")
    no-repeat bottom 160px left 20px;
  box-shadow: inset 0 -120px ${color.white};

  @media (max-width: 800px) {
    background: ${color.absoluteBlack};
    padding-top: 40px;
    box-shadow: inset 0 -60px ${color.white};
  }
`;

export const Container = styled(ContainerDefault)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px 40px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const Content = styled.div`
  align-self: end;
  padding-bottom: 200px;

  & > p:first-child {
    margin-bottom: 32px;
  }

  & > p:nth-child(2) {
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    padding-bottom: 0px;

    & > p:first-child {
      margin-bottom: 16px;
    }
  }
`;

export const Details = styled.span`
  color: ${color.primary};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  
  @media (max-width: 800px) {
    height: 300px;
  }
`;
