import React, { Component } from 'react';
import iconSearch from '../../assets/images/icon_search.svg';
import { Bar } from './style';


class Search extends Component {

    state = {
        pesquisa: '',
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            window.location.href = "./filters"
        }
    }

    handleInputChange = e => {
        this.setState({ pesquisa: e.target.value });
        console.log(this.state.pesquisa);
    }

    handleSubmit = e => {
        e.preventDefault();
    }   

    render() {
        return (
                <Bar onSubmit={this.handleSubmit}>
                    <input
                        id="pesquisar"
                        onKeyDown={this._handleKeyDown}
                        onChange={this.handleInputChange}
                        value={this.state.pesquisa}
                        name="pesquisa"
                        type="text"
                        placeholder="Procure por eventos, músicos ou bandas" />
                    <button type="submit" className="submiter">
                        <img src={iconSearch} alt="pesquisar"/>
                    </button>
                </Bar>
        
        )
    }
}

export default Search;