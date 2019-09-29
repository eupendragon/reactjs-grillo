import React, {Component} from 'react';
import {Container} from './style';

class ProfileMenu extends Component{
    render(){
        return(
            <Container>
                <button> PERFIL </button>
                <button> MÚSICAS </button>
                <button> EVENTOS </button>
                <button> VAGAS </button>
            </Container>
        );
    }
}

export default ProfileMenu;