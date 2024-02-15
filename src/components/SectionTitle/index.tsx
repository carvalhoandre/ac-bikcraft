import { SectionTitleProps } from "./types";

import { Ty1xl, Ty2lb } from "../../styles/typography";
import color from "../../styles/colors";

import * as styles from "./styles";

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle }) => {
  return (
    <styles.BackGround>
      <styles.Container>
        <Ty2lb color={color.charcoal}>{title}</Ty2lb>
        <styles.Line>
          <Ty1xl color={color.white}>
            {subTitle} <styles.Details>.</styles.Details>
          </Ty1xl>
        </styles.Line>
      </styles.Container>
    </styles.BackGround>
  );
};

export default SectionTitle;
