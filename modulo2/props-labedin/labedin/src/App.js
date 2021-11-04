import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://ca.slack-edge.com/TLAVDH7C2-U02FL3DRK0B-9e2ee7309a18-512" 
          nome="Ederson Braga Mello" 
          descricao="Oi, eu sou o Ederson. Sou estudande da Labenu. Adoro quando chega sexta-feira e depois de concluir o projeto, quando o astrobot manda a mensagem para o slide da próxima aula."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <CardPequeno 
          // imagem="https://ca.slack-edge.com/TLAVDH7C2-U02FL3DRK0B-9e2ee7309a18-512" 
          nome="E-mail:" 
          descricao="braga.edermello@gmail.com"
        />
      
      <CardPequeno 
          // imagem="https://ca.slack-edge.com/TLAVDH7C2-U02FL3DRK0B-9e2ee7309a18-512" 
          nome="Endereço:" 
          descricao="Rua 15 de novembro 1800"
        />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante Web Full Stack" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
