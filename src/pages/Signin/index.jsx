import { Container, Form } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";

export function SignIn() {
  return (
    <Container>
     <Logo />
      <Form>
        <h1>Faça login</h1>
        <p>Email</p>
        <Input placeholder="E-mail" type="text" />
        <p>Senha</p>
        <Input placeholder="Senha" type="password" />

        <Button title="Entrar" />

        <a href="#">
          Criar uma conta
        </a>
      </Form>
    </Container>
  );
}
