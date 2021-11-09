import React from "react";

import "./styles.css";
import Pagina1 from "./components/pagina1";
import Pagina2 from "./components/pagina2";
import Pagina3 from "./components/pagina3";
import Final from "./components/final";

class App extends React.Component {
  state = {
      pagina: 1
  };

  renderizaPagina = () => {
    switch (this.state.pagina) {
      case 1:
        return <Pagina1 />;
      case 2:
        return <Pagina2 />;
      case 3:
        return <Pagina3 />;
      case 4:
        return <Final />;
      default:
        return <Final />;
    }
  };

  proximaPagina = () => {
    this.setState({ pagina: this.state.pagina + 1 });
  };

  render() {
    return (
      <div className="App">
        {this.renderizaPagina()}
        <br />
        {this.state.pagina !== 4 && (
          <button onClick={this.proximaPagina}>Próxima página</button>
        )}
      </div>
    );
  }
}


export default Apps;
