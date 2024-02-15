import { ButtonProps } from "./types";

import * as styles from "./styles";

const Button: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <styles.Button onClick={action}>
        {title}
    </styles.Button>
  );
};

export default Button;
