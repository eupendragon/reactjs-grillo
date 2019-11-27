import React, { Component } from 'react';
import { MusicContainer, Album, Info, Container, Content } from './style';
import Play from '../../assets/images/icon_album.svg';
import {api} from '../../api/APIUtils'

export default class MusicList extends Component {
    state = {
        musics: []
    }

    async componentDidMount(){
        const MyInfo = JSON.parse(localStorage.getItem('@CacheGrillo:Results'))
        const MyMusics = await api.get(`/music?userId=${MyInfo._id}`)
        await this.setState({ musics: MyMusics.data })
    }

    playMusic(musicstep){
        const PlayerMus = document.getElementById('myplay')
        PlayerMus.src = `https://3333-dfd00ddf-cd28-4c87-acca-6c3ec15debdb.ws-us02.gitpod.io/musics/${musicstep}`
        PlayerMus.play();
    }

    render() {
        return (
            <Container>
                <span>MÚSICAS</span>
                <Content>
                    {this.state.musics.slice(0, 3).map(music => (
                        <MusicContainer>
                            <Album style={{ backgroundImage: `url(https://3333-dfd00ddf-cd28-4c87-acca-6c3ec15debdb.ws-us02.gitpod.io/files/${music.image})`}} >
                                <img onClick={() => this.playMusic(music.audio)} src={Play} />
                                <audio id="myplay"/>
                            </Album>
                            <Info>
                                <h3>{music.musicName}</h3>
                                <p>ABR 2018</p>
                            </Info>
                        </MusicContainer>
                    ))}
                </Content>
                <button>VER MAIS</button>
            </Container>
        )
    }
}
