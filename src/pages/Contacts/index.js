// Dependecies
import React from 'react';
// Styles
import { Container, Content, Chats, Messages, Local } from './style';
// Components
import Menu from '../../components/Menu';
import Search from '../../components/Search';
import ContactList from '../../components/ContactList';
import Chat from '../../components/ChatList';
import SendMessage from '../../components/SendMessage';

const Contacts = () => (
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
                <Chat/>
                <SendMessage/>
            </Messages>
        </Content>
    </Container>
);

export default Contacts;