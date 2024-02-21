enum Grayscale {
  white = "#ffffff",
  lightGray = "#f7f7f7",
  gray = "#ededed",
  mediumGray = "#dedede",
  darkGray = "#cccccc",
  charcoal = "#b2b2b2",
  slate = "#9c9c9c",
  gunmetal = "#717171",
  darkSlate = "#595959",
  black = "#404040",
}

enum DarkShades {
  jet = "#2e2e2e",
  absoluteBlack = "#111111",
  trueBlack = "#000000",
}

enum LightShades {
  light1 = "#a569ff",
  light2 = "#c19eff",
}

enum PrimaryColor {
  primary = "#7038cf",
}

enum DarkColors {
  dark1 = "#4d1f99",
  dark2 = "#3a156e",
}

const colors = {
  ...Grayscale,
  ...DarkShades,
  ...LightShades,
  ...PrimaryColor,
  ...DarkColors,
};

export default colors;
