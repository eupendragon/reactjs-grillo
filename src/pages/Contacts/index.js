// Dependecies
import React, { Component } from 'react';
// Styles
import { Container, Content, Chats, Messages, Local, WritteMessage } from './style';
// Components
import Menu from '../../components/Menu';
import Search from '../../components/Search';
import ContactList from '../../components/ContactList';
import Chat from '../../components/ChatList';

import SendIcon from '../../assets/images/icon_send.svg';

export default class Contacts extends Component {
    state = {
        message: [],
        newmessage: [
            ''
        ],
    }

    componentDidMount() {
        const messageSent = localStorage.getItem('mensagens');
        this.setState({ message: JSON.parse(messageSent)})
    }
    
    componentDidUpdate(_, prevState) {
        if (prevState != this.state.message) {
            localStorage.setItem('mensagens', JSON.stringify(this.state.message));
        }
    }

    handleInputChange = e => {
        this.setState({ newmessage: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            message: [...this.state.message, this.state.newmessage],
            newmessage: ''
        })
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
                        <h3>RIHANNA</h3>
                        <Chat />
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
            </Container>
        );
    }
}

