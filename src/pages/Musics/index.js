// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
} from './style';
// Components
import Menu from '../../components/Menu';
import MainHeader from '../../components/MainHeader';
// Images
import Album from '../../assets/images/music_album.svg';
import Back from '../../assets/images/control_back.svg';
import Play from '../../assets/images/control_play.svg';
import Next from '../../assets/images/control_next.svg';
import Loop from '../../assets/images/control_loop.svg';
import CreateIcon from '../../assets/images/iconCreateMusic.svg';

import { api } from '../../api/APIUtils'
export default class Musics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            musics: [],
        }
    }

    async componentDidMount() {
        const response = await api.get('music');
        this.setState({ musics: response.data })
        console.log(this.state.musics)
        console.log(this.state.musics[1].audio)
    }

    // registerToSocket() {
    //     // const socket = io('http://localhost:3333');

    //     socket.on('music', NewMusic => {
    //         this.setState({ musics: [NewMusic, ...this.state.musics] });
    //     })
    // }

    render() {
        return (
            <Container>
                <Menu />
                <Content>
                    <MainHeader subTitle="MÚSICAS" />
                    <Player>
                        <img src={Album} />
                        <Info>
                            <h3>Hey Jude</h3>
                            <p>BEATLES</p>
                            <Controls>
                                <img src={Back} />
                                <img className="play" src={Play} />
                                <img src={Next} />
                                <img src={Loop} />
                            </Controls>
                        </Info>
                    </Player>
                    <Title>
                        <div>
                            <h3>Playlist</h3>
                            <Link class="Link" to="/createmusic">
                                <button>
                                    <img src={CreateIcon} alt="create" />
                                    CRIAR
                                </button>
                            </Link>
                        </div>
                    </Title>
                    <Playlist>
                        {this.state.musics.map(itemMap => (
                            <Item key={itemMap.id}>
                                <p>{itemMap.musicName}</p>
                                <img src={`http://localhost:3333/files/${itemMap.image}`} alt=""/>
                                <audio controls src={`http://localhost:3333/files/${itemMap.audio}`}/>
                            </Item>
                        ))}
                    </Playlist>
                </Content>
            </Container>
        )
    }
}
