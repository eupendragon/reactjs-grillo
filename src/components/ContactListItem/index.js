import React, { Component } from 'react';
import {Item, Image, Friends} from './style';
import Profile from '../../assets/images/profileTeste.jpg';
import { api } from '../../api/APIUtils'

class ContactItem extends Component {

    state = {
        user: JSON.parse(localStorage.getItem('@CacheGrillo:User')),
        contacts: []
    }

    async componentDidMount() {
        const response = await api.get(`conversations?id=${this.state.user._id}`);
        this.setState({ 
            contacts: response.data,
        })
        console.log(response.data)
    }

    render() {
        return (
            <>
            {
                this.state.contacts.map(key => (
                    <Item key={key._id}>
                        <Image>
                            <img src={`https://3333-a6ed127b-4d1f-4137-ae95-f5bd4566c8b0.ws-us02.gitpod.io/files/${key.image}`} alt="profile"/>
                        </Image>
                        <Friends>
                            <h3> {key.nome} </h3>
                            <span> Mensagem recebida</span>
                        </Friends>
                    </Item>
                ))
            }
            </>
        );
    }
}

export default ContactItem;