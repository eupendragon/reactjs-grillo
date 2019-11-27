// Dependecies
import React, { Component } from 'react';

// Styles
import {
    Container,
    Chat,
    Content,
    Chats,
    Title,
    Messages,
    Local,
    BoxSent,
    WritteMessage,
    MessageSent
} from './style';

// Components
import Menu from '../../components/Menu';
import Search from '../../components/Search';
import ContactList from '../../components/ContactList';
import SendIcon from '../../assets/images/icon_send.svg';

import io from 'socket.io-client'

import { api } from '../../api/APIUtils'


export default class Contacts extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.user = JSON.parse(localStorage.getItem('@CacheGrillo:User'))

        this.state = {
            message: [],
            newmessage: ''
        }

        this.socket = io.connect('https://3333-a6ed127b-4d1f-4137-ae95-f5bd4566c8b0.ws-us02.gitpod.io/')
        this.socket.emit('subscribe', localStorage.getItem('@CacheGrillo:Room'))

        this.socket.on('conversation private post', data => {
            this.setState(state => {
                const message = state.message.push(data.message)
                return message
            })
        })
    }

    async componentDidMount() {

        // const messageSent = localStorage.getItem('mensagens');
        // this.setState({ message: JSON.parse(messageSent) })
    }

    componentDidUpdate(_, prevState) {
        
        console.log(this.state.message)
        // this.socket.on('chat message', data => {
        //     this.setState({
        //         message: [
        //             ...this.state.message, data
        //         ]
        //     })
        // })

        if (prevState != this.state.message) {
            localStorage.setItem('mensagens', JSON.stringify(this.state.message));
        }
    }

    handleInputChange = e => {
        this.setState({ newmessage: e.target.value })
        console.log(this.state.newmessage)
    }

    handleSubmit = e => {
        e.preventDefault();
        let input = document.getElementById('mensagem').value;
        if (input !== '') {
            this.socket.emit('send message', {
                room: localStorage.getItem('@CacheGrillo:Room'),
                message: this.state.newmessage
            })
            this.setState({
                newmessage: ''
            })
        }
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();

    }

    handleDeleteStorage() {
        localStorage.clear();
        window.location.reload()
    }

    scrollMessage() {
    }

    render() {
        return (
            <Container>
                <Menu />
                <Content>
                    <Chats>
                        <h1>Grillo</h1>
                        <Local>
                            <h4>MENSAGENS</h4>
                        </Local>
                        <ContactList />
                    </Chats>
                    <Messages>
                        <Search />
                        <Title>
                            <h3>RIHANNA</h3>
                            <button onClick={this.handleDeleteStorage}> L</button>
                        </Title>
                        <Chat>
                            <MessageSent>
                                {this.state.message.map((key, index) => (
                                    <BoxSent key={index}>
                                        {key}
                                    </BoxSent>
                                ))}
                            </MessageSent>
                        </Chat>
                        <WritteMessage onSubmit={this.handleSubmit}>
                            <input id="mensagem"
                                placeholder="Digite sua mensagem"
                                value={this.state.newmessage}
                                onChange={this.handleInputChange}
                            />
                            <button type="submit">
                                <img src={SendIcon} alt="enviar" />
                            </button>
                        </WritteMessage>
                    </Messages>
                </Content>
            </Container >
        );
    }
}

