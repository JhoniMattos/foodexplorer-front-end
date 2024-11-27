import { Container, Logout, Profile } from "./styles";
import { Receipt, SignOut } from "@phosphor-icons/react";

import { Input } from "../Input";
import { Button } from "../Button";

export function Header() {
  return (
    <Container>
      <Profile>
        <div className="logo">
          <svg
            width="30"
            height="30"
            viewBox="0 0 27 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5391 0.5L26.5294 8V23L13.5391 30.5L0.548681 23V8L13.5391 0.5Z"
              fill="#065E7C"
            />
          </svg>
          <h1>food explorer</h1>
        </div>
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
