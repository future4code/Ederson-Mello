import React from "react";
import PerguntaAberta from "./perguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";

class Pagina3 extends React.Component {
  render() {
    return (
      <div>
        <h3>PÁGINA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <PerguntaAberta
          pergunta={"5. Por que você não terminou um curso de graduação?"}
        />
        <PerguntaOpcoes
          pergunta={"6. Você fez algum curso complementar?"}
          opcoes={["Nenhum", "Curso técnico", "Curso de inglês"]}
        />
      </div>
    );
  }
}

export default Pagina3;
