import { SectionTitleProps } from "./types";

import { Ty1xxl, Ty2lb } from "../../styles/typography";
import color from "../../styles/colors";

import * as styles from "./styles";

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle, isDark }) => {
  return (
    <styles.BackGround>
      <styles.Container>
        {subTitle && <Ty2lb color={color.charcoal}>{subTitle}</Ty2lb>}

        <styles.Line>
          <Ty1xxl color={isDark ? color.white : color.absoluteBlack}>
            {title} <styles.Details>.</styles.Details>
          </Ty1xxl>
        </styles.Line>
      </styles.Container>
    </styles.BackGround>
  );
};

export default SectionTitle;
