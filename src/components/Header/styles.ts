import styled from "styled-components";
import color from "../../styles/colors";

export const Header = styled.header`
  background-color: ${color.trueBlack};
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  box-sizing: border-box;

  max-width: 1200px;

  margin: 0 auto;

  @media (max-width: 800px) {
    & a:after {
      display: none;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;

  & > li > a {
    display: inline-block;
    padding: 16px 0px;
    position: relative;
    color: ${color.white};
  }

  & > li > a:after {
    content: "";
    display: block;
    height: 2px;
    width: 0px;
    background-color: ${color.white};
    margin-top: 4px;
    transition: 0.3s;
    position: absolute;
  }

  & > li > a:hover::after,
  & > li > a.active::after {
    width: 100%;
  }

  @media (max-width: 800px) {
    gap: 20px;

    & > li > a {
      background-color: ${color.absoluteBlack};
      padding: 12px 16px;
      border-radius: 4px;
    }
  }

  @media (max-width: 600px) {
    gap: 12px;

    & > li > a {
      padding: 8px 12px;
      font-size: 14px;
    }
  }
`;

export const LogoComponent = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;
