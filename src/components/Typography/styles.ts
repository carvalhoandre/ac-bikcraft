import styled, { css } from "styled-components";

import { TypographyStyleProps } from "./types";

export const Typography = styled.span<TypographyStyleProps>`
  ${({ size, weight, family, color }) => css`
    font: ${weight} ${size} / ${[size]} ${family};
    color: ${color};

    @media (max-width: 1200px) {
      ${size === "4rem" &&
      css`
        font-size: 3rem;
      `}

      ${(size === "1.5rem" || size === "2rem") &&
      css`
        font-size: 1.125rem;
      `}
    }

    @media (max-width: 800px) {
      ${size === "4rem" &&
      css`
        font-size: 2rem;
      `}

      ${size === "2rem" &&
      css`
        font-size: 1.5rem;
      `}
    }
  `}
`;
