// Dependecies
import React from 'react';
import {Link} from 'react-router-dom';

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

const Musics = () => (
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
                <Item>
                    <p>Nome da Músca</p>
                    <p>Autor</p>
                    <p>Ano de lançamento</p>
                </Item>
                <Item>
                    <p>Nome da Músca</p>
                    <p>Autor</p>
                    <p>Ano de lançamento</p>
                </Item>
                <Item>
                    <p>Nome da Músca</p>
                    <p>Autor</p>
                    <p>Ano de lançamento</p>
                </Item>
                <Item>
                    <p>Nome da Músca</p>
                    <p>Autor</p>
                    <p>Ano de lançamento</p>
                </Item>
                <Item>
                    <p>Nome da Músca</p>
                    <p>Autor</p>
                    <p>Ano de lançamento</p>
                </Item>
                <Item>
                    <p>Nome da Músca</p>
                    <p>Autor</p>
                    <p>Ano de lançamento</p>
                </Item>
                <Item>
                    <p>Nome da Músca</p>
                    <p>Autor</p>
                    <p>Ano de lançamento</p>
                </Item>
                <Item>
                    <p>Nome da Músca</p>
                    <p>Autor</p>
                    <p>Ano de lançamento</p>
                </Item>
            </Playlist>
        </Content>
    </Container>
);

export default Musics;