import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    nameUser: "",
    emailUser: "",
    listaDeUsers: []
  }

  postCreateUser = () => {
    const body = {
      name: this.state.nameUser,
      email: this.state.emailUser
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "ederson-mello-carver"
      }
    }).then(() => {
      this.setState({
        nameUser: "",
        emailUser: ""
      })
      this.showList()
    }).catch((err) => {
      console.log(err.response.data)
    })
  }

  showList = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "ederson-mello-carver"
      }
    }).then((res) => {
      this.setState({
        listaDeUsers: res.data.result
      })
    })
  }

  onChangeNome = (event) => {
    this.setState({nameUser: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({emailUser: event.target.value})
  }

  render() {
    const listNames = this.state.listaDeUsers.map((nomes) => {
      return <div>
        <p>{nomes.nameUser}</p>
        <p>{nomes.emailUser}</p>
      </div>
    })
    return (
      <div>
        <h1>Cadastrar Usuários</h1>
        <p>Nome</p>
        <input value = {this.state.nameUser} onChange={this.onChangeNome} />
        <p>e-mail</p>
        <input value = {this.state.emailUser} onChange={this.onChangeEmail} />
        <button onClick = {this.postCreateUser}> Enviar </button>
        <ul> {listNames} </ul>
      </div>
    )
  }
}