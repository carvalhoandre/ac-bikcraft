import React from "react";
import { Navigate } from "react-router-dom";


import { Ty1m, Ty2l, Ty2s } from "../../../../styles/typography";
import color from "../../../../styles/colors";

import SectionTitle from "../../../../components/SectionTitle";
import Button from "../../../../components/Button";

import * as styles from "./styles";

const Technology: React.FC = () => {
  const bucketUrl = import.meta.env.VITE_BUCKET_URL;

  const handleNavigate = (route: string) => {
    return <Navigate to={route} />;
  };

  return (
    <styles.Article>
      <styles.Container>
        <styles.Content>
          <SectionTitle
            title="você escolhe as suas cores e componentes"
            subTitle="Tecnologia Avançada"
            isDark
          />

          <Ty2l color={color.charcoal}>
            Cada Bikcraft é única e possui a sua identidade. As medidas serão
            exatas para o seu corpo e altura, garantindo maior conforto e
            ergonomia na sua pedalada. Você pode também personalizar
            completamente as suas cores.
          </Ty2l>

          <Button
            title="Escolha um modelo"
            action={() => handleNavigate("bicycles")}
          />

          <styles.Benefits>
            <styles.Item>
              <img
                src={bucketUrl + "/icones/eletrica.svg?raw=true"}
                alt=""
                width="24"
                height="24"
              />
              <Ty1m color={color.white}>Motor Elétrico</Ty1m>

              <Ty2s color={color.charcoal}>
                Toda Bikcraft é equipada com um motor elétrico que possui
                duração de até 120h. A bateria é recarregada com a sua energia
                gasta ao pedalar.
              </Ty2s>
            </styles.Item>

            <styles.Item>
              <img
                src={bucketUrl + "/icones/rastreador.svg?raw=true"}
                alt=""
                width="24"
                height="24"
              />
              <Ty1m color={color.white}>Rastreador</Ty1m>
              <Ty2s color={color.charcoal}>
                Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos
                rastreadores e sistemas anti-furto para garantir o seu sossego.
              </Ty2s>
            </styles.Item>
          </styles.Benefits>
        </styles.Content>

        <styles.Image
          src={bucketUrl + "/fotos/tecnologia.jpg?raw=true"}
          alt=""
          width="1200"
          height="1920"
        />
      </styles.Container>
    </styles.Article>
  );
};

export default Technology;
