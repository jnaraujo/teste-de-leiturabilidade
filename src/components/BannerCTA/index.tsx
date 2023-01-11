import Button from "./Button";
import { Content, Container } from "./styles";

export const BannerCTA = () => (
  <Container>
    <Content>
      <h2>Teste a facilidade de leitura do seu texto!</h2>
      <p>
        Crie, edite e importe seu texto de forma fácil e rápida.
        <br />
        Descubra em tempo real o nível de facilidade de leitura do seu texto.
      </p>
      <Button />
    </Content>
  </Container>
);
