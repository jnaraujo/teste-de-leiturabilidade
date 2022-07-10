import { Container, Content } from "../styles/importPage";

const Page = () => (
  <Container>
    <Content>
      <h1>Que página deseja importar?</h1>
      <div>
        <input type="url" /> <button type="button">Importar</button>
      </div>
    </Content>
  </Container>
);

export default Page;
