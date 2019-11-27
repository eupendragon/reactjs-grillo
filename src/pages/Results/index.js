// Dependecies
import React, { Component } from 'react';
// Styles
import { Container, Content, Info, ProfileInfo, More, Publi } from './style';
// Components
import Menu from '../../components/Menu';
import MainHeader from '../../components/MainHeader';
import MusicList from '../../components/ProfileMusicsList';
import EventList from '../../components/ProfileEventList';

import {api} from '../../api/APIUtils'
import upperCase from 'upper-case';

export default class Results extends Component {
    state = {
        nome: '',
        place: '',
        type: 'MÚSICO',
        description: '',
        image: null,
    }

    async componentDidMount() {
        const MyInfo = JSON.parse(localStorage.getItem('@CacheGrillo:Results'))

        this.setState({ 
            nome: MyInfo.nome,
            place: MyInfo.estado,
            description: MyInfo.descricao,
            image: MyInfo.image
         })
    }

    render() {
        const { nome, place, type, description, image } = this.state
        return (
            <Container>
                <Menu />
                <Content style={{backgroundImage:  `linear-gradient(to top,
     #182026 25%,
     transparent 100% )`+','+`url(https://3333-dfd00ddf-cd28-4c87-acca-6c3ec15debdb.ws-us02.gitpod.io/files/${image})`}}>
                    <MainHeader subTitle="MÚSICO" />
                    <Info>
                        <div>
                            <h1>{nome}</h1>
                            <p>{place.toUpperCase()} | {type}</p>
                        </div>
                    </Info>
                </Content>
                <ProfileInfo>
                    <MusicList />
                    <EventList />
                    <More>
                        <div>
                            <span>SOBRE {nome.toUpperCase()}</span>
                            <button className="follow">SEGUIR</button>
                            <p>{description}</p>
                            <button className="viewMore">VER MAIS</button>
                        </div>
                        <div>
                        </div>
                    </More>
                </ProfileInfo>
            </Container>
        );
    }
}
