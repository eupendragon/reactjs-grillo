// Dependecies
import React, { Component } from 'react';
// Styles
import {
    Container,
    Content,
    Results,
    TypeRes,
    Estrutura
} from './style';
// Components
import Menu from '../../components/Menu';
import MainHeader from '../../components/MainHeader';
import FiltersMenu from '../../components/FiltersMenu';

import { Link } from 'react-router-dom';

const Filters = () => (
    <Container>
        <Menu />
        <Content>
            <MainHeader subTitle="RESULTADOS" />
            <FiltersMenu />
            <SearchResults />
        </Content>
    </Container>
);

export default Filters;


class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: [],
        }
        
    }
    async componentDidMount() {
        const results = JSON.parse(localStorage.getItem('@CacheGrillo:Query'))
        await this.setState({ query: results })
    }
    
    async getprofile(profile){
        await localStorage.setItem('@CacheGrillo:Results', JSON.stringify(profile))
        window.location.href = '/results'
    }

    render() {
        return (
            <Results>
                <TypeRes>
                    <button>MÚSICOS</button>
                </TypeRes>
                {this.state.query.map(musics => (
                    <Estrutura key={musics._id}>
                        <div style={{ backgroundImage: `url(https://3333-dfd00ddf-cd28-4c87-acca-6c3ec15debdb.ws-us02.gitpod.io/files/${musics.image})` }} className="prof">
                        </div>
                        <div className="back">
                            <p>{musics.nome}</p>
                            <button onClick={() => this.getprofile(musics)}>VER PERFIL</button>
                        </div>
                    </Estrutura>
                ))}
            </Results>
        )
    }
}