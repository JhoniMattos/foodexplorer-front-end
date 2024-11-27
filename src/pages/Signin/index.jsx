import { Container, Form } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Crie sua conta</h1>

        <Input placeholder="E-mail" type="text" />

        <Input placeholder="Senha" type="password" />

        <Button title="Entrar" />
      </Form>
    </Container>
  );
}
