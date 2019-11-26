import React, { Component } from 'react';
import iconSearch from '../../assets/images/icon_search.svg';
import { Bar } from './style';
import { api } from '../../api/APIUtils'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pesquisa: '',
        }
    }

    handleInputChange = e => {
        this.setState({ pesquisa: e.target.value });
        console.log(this.state.pesquisa);
    }

    handleSubmit = async e => {
        e.preventDefault();
        const response = await api.get(`profiles?nome=${this.state.pesquisa}`)
        await localStorage.setItem('@CacheGrillo:Query', JSON.stringify(response.data))
        window.location.href = "./filters"
    }

    render() {
        return (
            <Bar onSubmit={this.handleSubmit}>
                <input
                    id="pesquisar"
                    onChange={this.handleInputChange}
                    value={this.state.pesquisa}
                    name="pesquisa"
                    type="text"
                    placeholder="Procure por eventos, músicos ou bandas" 
                />
                <button type="submit" className="submiter">
                    <img src={iconSearch} alt="pesquisar" />
                </button>
            </Bar>

        )
    }
}

export default Search;