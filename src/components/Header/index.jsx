import { Container, Logout, Profile } from "./styles";
import { Receipt, SignOut } from "@phosphor-icons/react";

import { Input } from "../Input";
import { Button } from "../Button";
import { Logo } from '../Logo';

export function Header() {
  return (
    <Container>
      <Profile>
        <Logo />
        <Input
          placeholder="&#x1F50E;&#xFE0E; Busque por pratos ou ingredientes"
        />
        <div>
          <Button title="Pedidos (0)" icon={Receipt} />
        </div>
        <Logout>
          <SignOut  />
        </Logout>
      </Profile>
    </Container>
  );
}
