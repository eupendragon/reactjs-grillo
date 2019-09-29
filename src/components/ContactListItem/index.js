import React, { Component } from 'react';
import {Item, Image, Friends} from './style';
import Profile from '../../assets/images/profileTeste.jpg';

class ContactItem extends Component {
    render() {
        return (
            <Item>
                <Image>
                    <img src={Profile} />
                </Image>
                <Friends>
                    <h3> Juhianna </h3>
                    <span> Mensagem recebida</span>
                </Friends>
            </Item>
        );
    }
}

export default ContactItem;