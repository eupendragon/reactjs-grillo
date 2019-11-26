// Dependecies
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// Styles
import {
    Container,
    Content,
    Player,
    Info,
    Controls,
    Item,
    Title,
    Playlist
} from './style'

// Components
import Menu from '../../components/Menu'
import MainHeader from '../../components/MainHeader'

// Images
import Album from '../../assets/images/music_album.svg'
import Back from '../../assets/images/control_back.svg'
import Play from '../../assets/images/control_play.svg'
import Next from '../../assets/images/control_next.svg'
import Loop from '../../assets/images/control_loop.svg'
import CreateIcon from '../../assets/images/iconCreateMusic.svg'

import { api } from '../../api/APIUtils'
export default class Musics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            musics: [],
        }
    }

    handlePlayMusic = async (itemMap) => {
        let Title = document.getElementById('musicTitle')
        let Banner = document.getElementById('musicBanner')
        let Player = document.getElementById('musicPlayer')
        let Image = `http://localhost:3333/files/${itemMap.image}`
        
        Title.textContent = itemMap.musicName
        Banner.style.backgroundImage = "url(" + Image + ")"
        Player.src = `http://localhost:3333/musics/${itemMap.audio}`
    }

    async componentDidMount() {
        let Title = document.getElementById('musicTitle')
        let Banner = document.getElementById('musicBanner')
        let Player = document.getElementById('musicPlayer')        

        const user = JSON.parse(localStorage.getItem('@CacheGrillo:User'))
        
        const response = await api.get(`/music?userId=${user._id}`)
        this.setState({ musics: response.data })

        const {musics} = this.state
        let Image = `http://localhost:3333/files/${musics[0].image}`
        Title.textContent = musics[0].musicName
        Player.src = `http://localhost:3333/musics/${musics[0].audio}`
        Banner.style.backgroundImage = "url(" + Image + ")"
    }

    render() {
        return (
            <Container>
                <Menu />
                <Content>
                    <MainHeader subTitle="MÚSICAS" />
                    <Player>
                        <div id="musicBanner">
                        </div>
                        <Info>
                            <h3 id="musicTitle"></h3>
                            <p>VOCÊ</p>
                            <Controls>
                                <audio src controls id="musicPlayer"></audio>
                                {/* <img src={Back} />
                                <img className="play" src={Play} />
                                <img src={Next} />
                                <img src={Loop} /> */}
                            </Controls>
                        </Info>
                    </Player>
                    <Title>
                        <div>
                            <h3>Playlist</h3>
                            <Link className="Link" to="/createmusic">
                                <button>
                                    <img src={CreateIcon} alt="create" />
                                    CRIAR
                                </button>
                            </Link>
                        </div>
                    </Title>
                    <Playlist>
                        {this.state.musics.map(itemMap => (
                            <Item key={itemMap._id} onClick={() => this.handlePlayMusic(itemMap)}>
                                <p>{itemMap.musicName}</p>
                                <audio src={`http://localhost:3333/musics/${itemMap.audio}`}/>
                            </Item>
                        ))}
                    </Playlist>
                </Content>
            </Container>
        )
    }
}
