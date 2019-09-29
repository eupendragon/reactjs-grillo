// Dependecies
import React from 'react';
// Styles
import { Container, 
    Content, 
    Results, 
    TypeRes, 
    Estrutura } from './style';
// Components
import Menu from '../../components/Menu';
import MainHeader from '../../components/MainHeader';
import FiltersMenu from '../../components/FiltersMenu';

import {Link} from 'react-router-dom';

const Filters = () => (
    <Container>
        <Menu />
        <Content>
            <MainHeader subTitle="RESULTADOS"/>
            <FiltersMenu/>
            <SearchResults/>
        </Content>
    </Container>
);

export default Filters;


const SearchResults = () => (
    <Results>
        <TypeRes>
            <button>MÚSICOS</button>
        </TypeRes>
        <Estrutura>
            <div className="prof">
            </div>
            <div className="back">
                <p>ALOK</p>
                <Link to="./results" className="Link"><button>VER PERFIL</button></Link>
            </div>
        </Estrutura>
    </Results>
);