import React from 'react'
import styled from 'styled-components'
import {useHistory} from "react-router-dom"

const Titulo = styled.h1`
text-align: center;
color: black;
padding: 10px;
`

const Titulo1 = styled.h1`
margin: 40px;
text-align: center;
color: black;
`

const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin: 10px;
`
const Buttons = styled.button `
margin: 40px 20px ;
padding: 15px;
color: white;
width: 200px;
color: white ;
background-color: black;
border-radius: 10px;
cursor: pointer;
:hover {
    background-color: gray;
}
`

function HomePage() {

    const history = useHistory()

    const irParaViagens = () => {
        history.push('/trips/list')
    }

    const irParaAreaDeAdministrador = () => {
        history.push('/login')
    }


    return (

        <div>

            <Titulo1>Labex</Titulo1>
           
            <Titulo> A Sua Viagem de primeira classe!!</Titulo>

            <ContainerButtons>
                <Buttons onClick={irParaViagens}>Ver Viagens</Buttons>
                <Buttons onClick={irParaAreaDeAdministrador}>Area de Administrador</Buttons>
            </ContainerButtons>
        </div>

    )
}

export default HomePage