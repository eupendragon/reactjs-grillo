// Dependecies
import React, { Component } from 'react';
// Styles
import { Container, Content, Info, ProfileInfo, More, Publi } from './style';
// Components
import Menu from '../../components/Menu';
import MainHeader from '../../components/MainHeader';
import MusicList from '../../components/ProfileMusicsList';
import EventList from '../../components/ProfileEventList';

export default class Results extends Component {
    render() {
        return (
            <Container>
                <Menu />
                <Content>
                    <MainHeader subTitle="MÚSICO" />
                    <BasicInfo/>
                </Content>
                <ProfileInfo>
                    <MusicList />
                    <EventList />
                    <Sobre />
                    <Posts />
                </ProfileInfo>
            </Container>
        );
    }
}


const BasicInfo = () => (
    <Info>
        <div>
            <h1>Joao </h1>
            <p>SÃO PAULO | MÚSICO/DJ</p>
        </div>
    </Info>
);

const Sobre = () => (
    <More>
        <div>
            <span>SOBRE ALOK</span>
            <button className="follow">SEGUIR</button>
            <p>Lorem its ipsum do not every no every in every
                ipsum se every e inv nos do isnt ne
                no more happness</p>
            <button className="viewMore">VER MAIS</button>
        </div>
        <div>

        </div>
    </More>
);

const Posts = () => (
    <Publi>
        <div>
            <span>POSTAGENS</span>
            <div className="post">
                <p>"Conteúdo do post"</p>
            </div>
            <div className="postInfo">
                <p>Há 6h horas atrás</p>
            </div>
            <button className="viewMore">VER MAIS</button>
        </div>
        <div>

        </div>
    </Publi>
);