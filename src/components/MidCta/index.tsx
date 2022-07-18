/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { MainContainer } from "./styles";

const Component = () => (
  <MainContainer>
    <div className="left">
      <h2>Teste a facilidade de leitura do seu texto!</h2>
      <p>
        Crie, edite e importe seu texto de forma fácil e rápida.
        <br />
        Descubra em tempo real o nível de facilidade de leitura do seu texto.
      </p>
      <div className="button">
        <Link href="/">
          <a>Testar meu texto gratuitamente!</a>
        </Link>
      </div>
    </div>
  </MainContainer>
);

export default Component;
