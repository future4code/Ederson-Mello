import React, { useState } from 'react'
import styled from 'styled-components'
import {useHistory} from "react-router-dom"
import axios from 'axios'

const Titulo = styled.h1`
margin: 40px;
text-align: center;
color: black;
`

const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
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

const CardLogin= styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 130px;
`
const Inputs = styled.input `
padding: 10px;
margin: 15px;
width: 400px;
border: solid 1px #7D3996;
border-radius: 5px;
`

function LoginPage() {

    const [email, setEmail] = useState()
    const [password,setSenha] = useState()

    const history = useHistory()

    const voltar = () => {
        history.goBack()
    }

    const onChangeInputEmail = (event) => {
        setEmail (event.target.value)
    }

    const onChangeInputSenha = (event) => {
        setSenha (event.target.value)
    }

    const login = (event) => {

        const body = {
            email: email,
            password: password
        }

        axios.post ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/ederson-mello-carver/login', body)

        .then ((res) => {
            localStorage.setItem('token', res.data.token)
            history.push ("/admin/trips/list")
        })
        .catch ((err) => {
            console.log('deu errado', err)
        })

        event.preventDefault()
    }

    return (

        <div>
            <Titulo>Login</Titulo>

            <CardLogin onSubmit={login}>

                <Inputs onChange={onChangeInputEmail}
                value={email} 
                type={"email"}
                placeholder="E-mail"
                required
                />

                <Inputs type="password" 
                onChange={onChangeInputSenha} 
                value={password} 
                placeholder="Senha"
                required 
                />

            <Buttons>Entrar</Buttons>

            </CardLogin>

            <ContainerButtons>
                <Buttons onClick={voltar}>Voltar</Buttons>
            </ContainerButtons>
        </div>
    )
}

export default LoginPage