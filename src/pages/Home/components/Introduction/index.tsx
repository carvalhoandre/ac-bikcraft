import React from "react";
import { Navigate } from "react-router-dom";

import { Ty1xxl, Ty2l } from "../../../../styles/typography";
import color from "../../../../styles/colors";

import Button from "../../../../components/Button";
import * as styles from "./styles";

const Introduction: React.FC = () => {
 const bucketUrl = import.meta.env.VITE_BUCKET_URL;

  const handleNavigate = () => {
    return <Navigate to={"bicycles"} />;
  };

  return (
    <styles.Main>
      <styles.Container>
        <styles.Content>
          <Ty1xxl color={color.white}>
            Biciletas feitas sob medida <styles.Details>.</styles.Details>
          </Ty1xxl>

          <Ty2l color={color.white}>
            Bicicletas elétricas de alta precisão e qualidade, feitas sob medida
            para você. Explore o mundo na sua velocidade.
          </Ty2l>

          <Button
            title="Escolha a sua"
            action={() => handleNavigate()}
          />
        </styles.Content>

        <picture>
          <source
            media="(max-width: 800px)"
            srcSet={bucketUrl + "/bicicletas/nimbus.jpg?raw=true"}
          />
          <styles.Image
            src={bucketUrl + "/fotos/seguros.jpg?raw=true"}
            alt="Bicicleta elétrica preta."
            width="1280"
            height="1600"
          />
        </picture>
      </styles.Container>
    </styles.Main>
  );
};

export default Introduction;
