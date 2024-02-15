import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/ac-bikcraft.svg";
import * as styles from "./styles";

const Header: React.FC = () => {
  return (
    <styles.Header>
      <styles.Container>
        <Link to="/">
          <styles.LogoComponent
            src={Logo}
            width="136"
            height="32"
            alt="Bikcraft"
          />
        </Link>

        <nav aria-label="primary">
          <styles.List>
            <li>
              <Link to="/bicycles">Bicicletas</Link>
            </li>
            <li>
              <Link to="/insurance">Seguros</Link>
            </li>
            <li>
              <Link to="/contact">Contatos</Link>
            </li>
          </styles.List>
        </nav>
      </styles.Container>
    </styles.Header>
  );
};

export default Header;
