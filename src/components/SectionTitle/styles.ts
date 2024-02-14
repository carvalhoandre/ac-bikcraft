import styled from "styled-components";
import color from "../../styles/colors";

export const BackGround = styled.div`
  background-color: ${color.color11};
  padding: 60px 0px;

  @media (max-width: 600px) {
    padding: 40px 0px;
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 1200px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  &:first-child {
    margin-bottom: 4px;
  }

  @media (max-width: 600px) {
    &:first-child {
      font-size: 1rem;
      text-transform: lowercase;
      font-weight: 400;
    }
  }
`;

export const Details = styled.span`
  color: ${color.colorP1};
`;

export const Line = styled.div`
  display: flex;
`;
