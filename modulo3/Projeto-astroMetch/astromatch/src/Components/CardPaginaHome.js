import React from "react";
import styled from "styled-components";


const ContainerCardHome = styled.div`
display: flex;
flex-direction: column;
border: solid black 1px;
justify-content: space-around;
align-items: center;
width: 40vw;
height: 80vh;
img{
    max-height: 50%;
    max-width: 90%;
}
`
const Infos = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
    font-style: italic;
    font-weight: bold;
    text-align: justify;
    text-align-last: center;

}
`

const ButtonCard = styled.button`
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

const CardPaginaHome = (props) => {
    return (
        <ContainerCardHome>
            <img alt="imagem" src={props.pessoa.photo}></img>
            <Infos>
                <h2>{props.pessoa.name}, {props.pessoa.age} anos</h2>
                <p>{props.pessoa.bio}</p>
                <div>
                    <ButtonCard onClick={() => props.avaliaPerfil(false)}><b>X</b></ButtonCard>
                    <ButtonCard onClick={() => props.avaliaPerfil(true)}>❤</ButtonCard>
                </div>
            </Infos>

        </ContainerCardHome>
    )
}
export default CardPaginaHome 