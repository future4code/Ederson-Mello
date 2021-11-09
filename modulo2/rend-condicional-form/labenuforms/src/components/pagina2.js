import React from "react";
import PerguntaAberta from "./perguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";

class Pagina2 extends React.Component {
  render() {
    return (
      <div>
        <h3>PÁGINA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <PerguntaAberta pergunta={"5. Qual curso?"} />
        <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
      </div>
    );
  }
}

export default Pagina2;