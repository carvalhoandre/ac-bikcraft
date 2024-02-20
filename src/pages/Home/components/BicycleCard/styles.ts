import styled from "styled-components";

import color from "../../../../styles/colors";

export const Container = styled.article`
  flex: 1;
  min-width: 280px;

  & > span {
    padding-left: 20px;
  }

  & > img {
    margin-bottom: 16px;
    border-radius: 5px;
  }

  & > h3 {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }

  & > h3:hover {
    font-size: 2.1rem;
    cursor: pointer;
  }

  & > h3:hover::before {
    width: 14px;
  }

  & > h3::before {
    content: "";
    background-color: ${color.primary};
    width: 12px;
    height: 8px;
    display: inline-block;
    margin-right: 8px;
    transition: width 0.2s;
  }
`;
