import axios from "axios";
import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import CardPaginaMatch from "../../Components/CardPaginaMatch";
const ConteinerMatchs = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const ListaDeMatchs = styled.div`
display: flex;
flex-direction: column;
min-height: 6vh;
min-width: 30vw;
border: solid black 1px;
align-items: center;
justify-content: center;
padding: 10px 0px;
`

const Match =()=>{
    const [matchLista, setMatchLista] = useState([])

    useEffect(()=>{
        pegaQuemDeuMatch()
    },[])

    const pegaQuemDeuMatch = () => {

        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Ederson-Mello-Carver/matches")
        .then((res)=>{
            setMatchLista(res.data.matches)
            console.log(res.data.matches)
        }).catch((err)=>{
            console.log(err.response)
        })
    }
    const lista = matchLista.map((m) =>{
        return <CardPaginaMatch foto={m.photo} nome={m.name}/>
    })

    console.log(matchLista)
    return(
        <ConteinerMatchs>
            <ListaDeMatchs>
           {lista.length > 0 ? lista : <div> Não tem matches :(</div>}
            </ListaDeMatchs>
        </ConteinerMatchs>
    )
}
export default Match; 