import React from "react";
import { Navigate } from "react-router-dom";

import { SectionTitleProps } from "./types";

import { Ty1xl, Ty2m } from "../../../../styles/typography";
import color from "../../../../styles/colors";

import * as styles from "./styles";

const BicycleCard: React.FC<SectionTitleProps> = ({ bicycle }) => {
  const bucketUrl = import.meta.env.VITE_BUCKET_URL;

  const title = bicycle.name.split(" ")[0].toLowerCase();

  const handleOnClick = () => {
    return <Navigate to={title} />;
  };

  return (
    <styles.Container>
      <img
        src={`${bucketUrl}/bicicletas/${title}-home.jpg?raw=true`}
        alt="Bicicleta elétrica preta."
        width="920"
        height="1040"
      />

      <Ty1xl onClick={() => handleOnClick()}>{bicycle.name}</Ty1xl>
      <Ty2m color={color.gunmetal}>R$ {bicycle.value}, 00</Ty2m>
    </styles.Container>
  );
};

export default BicycleCard;
