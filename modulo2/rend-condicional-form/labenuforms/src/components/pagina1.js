import React from "react";
import PerguntaAberta from "./perguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";

class Pagina1 extends React.Component {
  render() {
    return (
      <div>
        <h3>PÁGINA 1 - DADOS GERAIS</h3>
        <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
        <PerguntaAberta pergunta={"2. Qual sua idade?"} />
        <PerguntaAberta pergunta={"3. Qual seu email?"} />
        <PerguntaOpcoes
          pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
        />
      </div>
    );
  }
}

export default Pagina1;
