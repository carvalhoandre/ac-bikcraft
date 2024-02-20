import React from "react";
import { Navigate } from "react-router-dom";

import { SectionTitleProps } from "./types";

import { Ty1xl, Ty2m } from "../../../../styles/typography";
import color from "../../../../styles/colors";

import * as styles from "./styles";

const BicycleCard: React.FC<SectionTitleProps> = ({ bicycle }) => {
  const handleOnClick = (route: string) => {
    return <Navigate to={route} />;
  };

  return (
    <styles.Container>
      <img
        src={bicycle.imageUrl}
        alt="Bicicleta elétrica preta."
        width="920"
        height="1040"
      />

      <Ty1xl onClick={() => handleOnClick(bicycle.name)}>{bicycle.name}</Ty1xl>
      <Ty2m color={color.gunmetal}>R$ {bicycle.value}, 00</Ty2m>
    </styles.Container>
  );
};

export default BicycleCard;
