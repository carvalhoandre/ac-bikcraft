import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  padding: 16px 32px;
  background: linear-gradient(#6E57E0, #5C1EC8);
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  color: #FFF;
  line-height: 1.33;
  font: 900 1.125rem/1.35 "Poppins", Arial, Helvetica, sans-serif;
  max-width: max-content;
  border: none;

  &:hover {
    background: linear-gradient(#5B1CC8, #6E57E0);
    cursor: pointer;
  }
`;
