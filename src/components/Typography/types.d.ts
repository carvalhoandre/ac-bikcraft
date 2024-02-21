import React from 'react';

// Define enums for valid options
enum Size {
  XS = "xs",
  S = "s",
  M = "m",
  L = "l",
  XL = "xl",
  XXL = "xxl",
}

enum Weight {
  NORMAL = "normal",
  MEDIUM = "medium",
  BOLD = "bold",
}

enum Family {
  POPPINS = "poppins",
  ROBOTO = "roboto",
}

interface TypographyProps {
  children: React.ReactNode;
  size?: Size;
  weight?: Weight;
  family?: Family;
  color?: string;
}

interface TypographyStyleProps {
  size?: string;
  weight?: string;
  family?: string;
  color?: string;
}
