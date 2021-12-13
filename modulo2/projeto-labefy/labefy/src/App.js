import React from "react";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
margin:0;
padding: 0;
`
const ContainerPrincipal = styled.div`
display: grid;
grid-template-rows: 50px 1fr 50px;
margin: 0;
padding: 0;
margin-bottom: -50vw;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

header{
  background-color: black;
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  display: flex;
  align-items: center;
  padding: 0;
}

}
footer{
  background-color:  black;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;t
}
`

const CardPlaylist = styled.div`
margin: 20px 0;
display: flex;
justify-content: space-between;
align-items: center;
width: 30%;
height: 5vh;
`

const MainDiv = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
font-family: Ariel;
text-align: justified;
align-items: justified;
margin: 10px;
padding: 0;
`

const ContainerComandos = styled.div`
display: flex;
flex-direction: column;
height: 100%;

input {
margin-bottom: 20px;
margin: 10px;
}
`

const ButtonStyle = styled.button`
padding: 2px;
background-color: white;
border-radius: 5px;
color: black;
font-size: 15px;
font-weight: bold;
border: 2px solid black;
&:hover{
  background: black;
  color: white;
  cursor: pointer;
}
`

export default class App extends React.Component {
  state = {
    playlistName: "",
    playlists: [],
    playlistTracks: [],
    music: "",
    artista: "",
    urlLink: "",
    playlistId: ""
  }

  componentDidMount() {
    this.getAllPlaylists()
  }

  getAllPlaylists = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
      headers: {
        Authorization: "ederson-mello-carver"
      }
    })

      .then((response) => {
        this.setState({ playlists: response.data.result.list })
        console.log(response)
      })

      .catch((err) => {
        alert(err.response.data)
      })
  }

  createPlaylist = () => {
    const body = {
      name: this.state.playlistName,
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
      headers: {
        Authorization: "ederson-mello-carver"
      }
    })

      .then(() => {
        this.setState({ playlistName: "" })
        this.getAllPlaylists()
        alert("Playlist Criada!")
      })
      .catch(() => {
        alert("Erro")
      })
  }

  deletePlaylist = (playlistId) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, {
      headers: {
        Authorization: "ederson-mello-carver"
      }
    })
      .then(() => {
        alert("Playlist Deletada")
        this.getAllPlaylists()
      })
      .catch((err) => {
        alert(err.response.data)
      })
  }

  getPlaylistsTracks = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
      headers: {
        Authorization: 'ederson-mello-carver'
      }
    })
      .then((response) => {
        this.setState({ playlistTracks: response.data.result.tracks, playlistId: id })
      })
      .catch((err) => {
        alert(err.response.data)
      })
  }

  addTrackToPlaylist = () => {
    const body = {
      name: this.state.music,
      artist: this.state.artista,
      url: this.state.urlLink
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}/tracks`, body, {
      headers: {
        Authorization: "ederson-mello-carver"
      }
    })
      .then((response) => {
        this.setState({
          music: "",
          artista: "",
          urlLink: "",
        })
        alert("Música adicionada!")
      })
      .catch((erro) => {
        console.log(erro.response)
        alert("Não foi dessa vez, tente novamente!")
      })
  }

  onChangePlaylistName = (e) => {
    this.setState({ playlistName: e.target.value })
  }

  onChangeMusic = (e) => {
    this.setState({ music: e.target.value })
  }

  onChangeArtist = (e) => {
    this.setState({ artista: e.target.value })
  }

  onChangeUrlLink = (e) => {
    this.setState({ urlLink: e.target.value })
  }

  render() {

    const listPlaylists = this.state.playlists.map((item) => {
      return <CardPlaylist key={item.id}>

        <p>{item.name}</p>

        <ButtonStyle onClick={() => this.getPlaylistsTracks(item.id)}>Ver Playlist</ButtonStyle>
        <ButtonStyle onClick={() => this.deletePlaylist(item.id)}>Deletar</ButtonStyle>
      </CardPlaylist>
    })

    const trackList = this.state.playlistTracks.map((music) => {
      return <div key={music.id}>
        <iframe src={music.url} width='20%' height='50' frameBorder="0" allowfullscreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </div>
    })

    return (
      <ContainerPrincipal>
        <GlobalStyle />
        <header>
          <h2> Labefy </h2>
        </header>
        <MainDiv>
          <div>
            <h2> Criar Playlists: </h2>
            <input
              placeholder="Nome da Playlist"
              onChange={this.onChangePlaylistName}
            />
            <ButtonStyle onClick={this.createPlaylist}>Criar Playlists</ButtonStyle>
            <div>
              <h2>Playlists:</h2>
              {listPlaylists}
              <h2>Detalhes da Playlist:</h2>
              {trackList}
            </div>
          </div>
          <hr />
          <ContainerComandos>
            <div>
              <h2> Adicionar Música na Playlist</h2>
              <input
                placeholder="Nome da Música"
                onChange={this.onChangeMusic}
              />
              <input placeholder="Artista"
                onChange={this.onChangeArtist}
              />
              <input placeholder="Link de aúdio"
                onChange={this.onChangeUrlLink}
              />
              <ButtonStyle onClick={this.addTrackToPlaylist}>Adicionar na Playlist</ButtonStyle>
            </div>
          </ContainerComandos>
        </MainDiv>
        <footer>
          <p>Projeto Ederson</p>
        </footer>
      </ContainerPrincipal>

    )
  }
}