import { Container, Brand, Copyright } from "./styles";

import brand from "../../assets/logo-footer.svg";

export function Footer() {
  return (
    <Container>
      <Brand>
        <img src={brand} alt="" />
      </Brand>
      <Copyright>
        © 2023 - Todos os direitos reservados.
      </Copyright>
    </Container>
  );
}
