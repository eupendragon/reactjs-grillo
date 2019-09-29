import React, { Component } from 'react';
import { Container, Results, FilterOption } from './style';

function resultsName() {
    var val = "";
    return val;
}

class FiltersMenu extends Component {
    render() {
        return (
            <Container>
                <Results> Resultados para "{resultsName()}"</Results>
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