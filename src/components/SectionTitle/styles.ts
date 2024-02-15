import styled from "styled-components";
import color from "../../styles/colors";

import ContainerDefault from "../../styles/components/container";

export const BackGround = styled.div`
  background-color: ${color.absoluteBlack};
  padding: 60px 0px;

  @media (max-width: 600px) {
    padding: 40px 0px;
  }
`;

export const Container = styled(ContainerDefault)`
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
  color: ${color.primary};
`;

export const Line = styled.div`
  display: flex;
`;
