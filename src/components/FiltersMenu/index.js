import React, { Component } from 'react';
import { Container, Results, FilterOption } from './style';

class FiltersMenu extends Component {
    state = {
        result: ''
    }
    async componentDidMount(){
        const queryres = JSON.parse(localStorage.getItem('@CacheGrillo:Query'))
        await this.setState({result: queryres[0].nome})
    }
    
    render() {
        return (
            <Container>
                <Results> Resultados para "{this.state.result}"</Results>
                <FilterOption>
                    <button> BANDAS </button>
                    <button> MÚSICOS </button>
                    <button> EVENTOS </button>
                    <button> VAGAS P/ EVENTOS </button>
                    <button> CLUBES/BARES </button>
                </FilterOption>
            </Container>
        );
    }
}

export default FiltersMenu;