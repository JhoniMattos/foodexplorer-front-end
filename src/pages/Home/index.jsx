import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Food } from "../../components/Food";

import homeBanner from "../../assets/home-banner.png";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <div>
          <header>
            <img src={homeBanner} alt="Maracrons coloridos com folhas e frutas vermelhas" />

            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </header>

          <Content>
            <Section title="Refeições">
              <Food>
                
              </Food>
            </Section>

            <Section title="Sombremesas">

            </Section>

            <Section title="Bebidas">

            </Section>
          </Content>
        </div>
      </main>

      <Footer />
    </Container>
  );
}


