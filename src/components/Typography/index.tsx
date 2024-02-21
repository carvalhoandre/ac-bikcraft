import React from "react";
import { TypographyProps, Size, Weight, Family } from "./types";
import * as styles from "./styles";

const sizes: Record<Size, string> = {
  [Size.XS]: "0.75rem",
  [Size.S]: "1rem",
  [Size.M]: "1.125rem",
  [Size.L]: "1.5rem",
  [Size.XL]: "2rem",
  [Size.XXL]: "4rem",
};

const weights: Record<Weight, string> = {
  [Weight.NORMAL]: "400",
  [Weight.MEDIUM]: "500",
  [Weight.BOLD]: "600",
};

const fonts: Record<Family, string> = {
  [Family.POPPINS]: "Poppins, Arial, Helvetica, sans-serif",
  [Family.ROBOTO]: "Roboto, Arial, Helvetica, sans-serif",
};

const Typography: React.FC<TypographyProps> = ({
  size = Size.S,
  weight = Weight.NORMAL,
  family = Family.ROBOTO,
  color = "#1111",
  children,
}) => {
  return (
    <styles.Typography
      size={sizes[size]}
      weight={weights[weight]}
      family={fonts[family]}
      color={color}
    >
      {children}
    </styles.Typography>
  );
};

export default Typography;
