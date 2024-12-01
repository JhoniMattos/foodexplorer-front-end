import { Container, Form } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";

export function SignUp() {
  return (
    <Container>
     <Logo />
      <Form>
        <h1>Crie sua conta</h1>
        <p>Seu nome</p>
        <Input placeholder="Exemplo: Maria da Silva" type="text" />
        <p>Email</p>
        <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" />
        <p>Senha</p>
        <Input placeholder="No mínimo 6 caracteres" type="password" />

        <Button title="Criar conta" />

        <a href="#">
        Já tenho uma conta
        </a>
      </Form>
    </Container>
  );
}
