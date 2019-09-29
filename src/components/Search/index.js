import React, { Component } from 'react';
import iconSearch from '../../assets/images/icon_search.svg';
import { Bar } from './style';


class Search extends Component {
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const valor = document.getElementById('pesquisar').value;
            window.location.href = "./filters"          
        }
    }
    render() {
        return (
            <Bar>
                <input 
                id="pesquisar" 
                onKeyDown={this._handleKeyDown} 
                type="text" 
                placeholder="Procure por eventos, músicos ou bandas" />
                
                <button type="submit" className="submiter">
                    <img src={iconSearch} />
                </button>
            </Bar>
        )
    }
}

export default Search;