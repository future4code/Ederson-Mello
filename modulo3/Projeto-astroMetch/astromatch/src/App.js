import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "./Paginas/Home/Home";
import Match from "./Paginas/Match/Match";
import styled from "styled-components";

const ButtonTela = styled.button`
margin: 5px;
border: none;
color: white ;
background-color: black;
border-radius: 10px;
width:150px;
height:30px;
cursor: pointer;
:hover {
    background-color: gray;
}
`

const App = () => {
  const [paginaAtual, setPaginaAtual] = useState("home")
  const [pessoa, setPessoa] = useState({})

  useEffect(() => {
    pegaPerfis()
  }, [])

  const pegaPerfis = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Ederson-Mello-Carver/person")
      .then((res) => {
        setPessoa(res.data.profile)

      }).catch((err) => {
        console.log(err)
      })
  }

  const avaliaPerfil = (choice) => {
    const body = {
      id: pessoa.id,
      choice: choice
    }

    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Ederson-Mello-Carver/choose-person", body)
      .then((res) => {
        pegaPerfis()
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }

  const limpaPerfis = () =>{
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Ederson-Mello-Carver/clear")
    .then((res)=>{
      alert("Marchs limpos!")
    }).catch((err)=>{
      console.log(err.response)
    })
  }

  const mudaPagina = () => {
    switch (paginaAtual) {
      case "home":
        return <Home
          pessoa={pessoa}
          avaliaPerfil={avaliaPerfil}
        />
      case "match":
        return <Match />
      default:
        return <Home />
    }
  }

  const atualizaPagina = () => {
    switch (paginaAtual) {
      case "home":
        setPaginaAtual("match")
        break
      case "match":
        setPaginaAtual("home")
        break
      default:
        setPaginaAtual("está indo pro defaut")
        break
    }
  }

  return (
    <div>
      <ButtonTela onClick={() => atualizaPagina()}>Ir para {paginaAtual === "home" ? ("Match") : ("Home")}</ButtonTela>
      <ButtonTela onClick={()=> limpaPerfis()}>Limpar match</ButtonTela>
      {mudaPagina()}
    </div>
  )
}

export default App;
