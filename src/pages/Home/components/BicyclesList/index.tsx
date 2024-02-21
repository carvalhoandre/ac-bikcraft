import React from "react";

import SectionTitle from "../../../../components/SectionTitle";
import BicycleCard from "../BicycleCard";
import { BicycleItem } from "../BicycleCard/types";

import * as styles from "./styles";

const BicyclesList: React.FC = () => {
  const bicycles: Array<BicycleItem> = [
    {
      name: "Nimbus Stark",
      value: 4.999,
    },
    {
      name: "Nebula Cosmic",
      value: 3.999,
    },
    {
      name: "Magic Might",
      value: 2.499,
    },
  ];

  return (
    <styles.Container>
      <SectionTitle title="escolha a sua" />

      <ul>
        {bicycles.map((bicycle, key) => (
          <li key={bicycle.name + key}>
            <BicycleCard bicycle={bicycle} key={key} />
          </li>
        ))}
      </ul>
    </styles.Container>
  );
};

export default BicyclesList;
