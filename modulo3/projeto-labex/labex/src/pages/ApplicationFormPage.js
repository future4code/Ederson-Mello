import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory, useParams } from "react-router-dom"
import useForm from '../hooks/useForm'
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

const Buttons = styled.button`
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

const CardCandidatura = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Inputs = styled.input`
padding: 10px;
margin: 15px;
width: 400px;
border: solid 1px #7D3996;
border-radius: 5px;
`

const Select = styled.select`
padding: 10px;
margin: 15px;
width: 420px;
border: solid 1px #7D3996;
border-radius: 5px;
`

function ApplicationFormPage(props) {

    const params = useParams()

    const { form, onChange, cleanFields } = useForm({

        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
        select: ""
    })

    const cadastrarCandidato = (event) => {

        const body = {

            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ederson-mello-carver/trips/${form.select}/apply`, body, {

            headers: {

                "Content-Type": "application/json"
            }

        })

            .then((res) => {
                alert('Cadastrado com sucesso')
            })

            .catch((err) => {
                console.log(err)
            })

        event.preventDefault()
        console.log('form enviado', form)
        cleanFields()

    }


    const history = useHistory()

    const voltar = () => {
        history.goBack()
    }


    const escolhaPlaneta = props.viagens.map((index) => {
        return <option value={index.id} key={index.id}>{index.planet}</option>

    })


    useEffect(() => {

        props.getTrips()

    }, [])

    return (

        <div>
            <Titulo>Inscreva-se para uma viagem</Titulo>

            <CardCandidatura onSubmit={cadastrarCandidato}>

                <Select name={"select"} onChange={onChange} value={form.select}>
                    <option>Escolha um Planeta</option>
                    <option>Mercúrio</option>
                    <option>Jupter</option>
                    <option>Vênus</option>
                    <option>Terra</option>
                    <option>Marte</option>
                    <option>Saturno</option>
                    <option>Urano</option>
                    <option>Netuno</option>
                    <option>Plutão</option>
                    {escolhaPlaneta}
                </Select>

                <Inputs
                    onChange={onChange}
                    name={"name"}
                    value={form.name}
                    type="text"
                    placeholder="Nome"
                    required
                    pattern={"^.{5,}"}
                    title={"O nome deve ter no mínimo 5 letras"}
                />

                <Inputs
                    onChange={onChange}
                    name={"age"}
                    value={form.age}
                    type="number"
                    placeholder="Idade"
                    required
                    min={18}
                />

                <Inputs
                    onChange={onChange}
                    name={"applicationText"}
                    value={form.applicationText}
                    type="text"
                    placeholder="Texto da candidatura"
                    required
                    pattern={"^.{30,}"}
                    title={"Preencha no mínimo 30 caracteres"}
                />

                <Inputs
                    onChange={onChange}
                    name={"profession"}
                    value={form.profession}
                    type="text"
                    placeholder="Profissão"
                    required
                    pattern={"^.{10,}"}
                    title={"Preencha no mínimo 10 caracteres"}
                />

                <Select onChange={onChange}
                    name={"country"}
                    value={form.country}>
                    <option>Escolha um País</option>
                    <option>Brasil</option>
                    <option>Uruguai</option>
                    <option>Estados Unidos</option>

                </Select>



                <Buttons>Enviar</Buttons>

            </CardCandidatura>

            <ContainerButtons>
                <Buttons onClick={voltar}>Voltar</Buttons>
            </ContainerButtons>

        </div>
    )
}

export default ApplicationFormPage