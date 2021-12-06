import React from "react";
import styled from "styled-components";

const Card = styled.div`
display: flex;
justify-content: left;
margin: 10px 20px;
border: black solid 1px;
width: 30vw;
height: 7;
h2{
    margin-left: 20px;
}
img{
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 5px;
}
`
const CardPaginaMatch = (props)=>{
    return(
        <Card>
            <img alt="aqui é " src={props.foto}/>
            <h2>{props.nome}</h2>
        </Card>
    )
}
export default CardPaginaMatch