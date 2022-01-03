import React from 'react'
import Erro from '../../assets/erro.png'
import * as C from './styled'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'

export const BackgroundContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const ImgErro = styled.img`
margin-top: 5vw;
max-width: 64vw;
max-height: 64vh;
` 

export default function Error() {
  return (
    <C.BackgroundContainer>
     <C.ImgErro src={Erro}/>
     <Typography color={'primary'} variant={'h4'} align={'center'}> ERRO 404 - Página Não Encontrada</Typography>
    </C.BackgroundContainer>
  );
}