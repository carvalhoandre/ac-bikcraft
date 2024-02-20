import styled from "styled-components";

export const Container = styled.article`
  padding: 60px 0 120px 0;

  & > ul {
    display: flex;
    gap: 40px;
    padding: 0 20px 20px 20px;
    max-width: 1400px;
    margin: 0 auto;
    overflow-x: auto;
  }

  & > li {
    flex: 1;
    min-width: 280px;
  }

  & > h2 {
    margin-bottom: 40px;
  }

  & > a {
    display: block;
  }

 

  & > h3 {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }

  & > h3::before {
    content: "";
    background-color: var(--color-p1);
    width: 12px;
    height: 8px;
    display: inline-block;
    margin-right: 8px;
    transition: width 0.2s;
  }

  & > a:hover h3::before {
    width: 24px;
  }

  & > li span {
    padding-left: 20px;
  }

  @media (max-width: 800px) {
    margin-bottom: 60px;

    & > ul {
      gap: 20px;
    }
  }
`;
