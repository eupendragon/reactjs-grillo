import React from 'react';
import {Container} from './style';
import MessageReceive from '../MessageReceive';
import MessageSent from '../MessageSent';

const  Chat = () => (
    <Container>
        <MessageSent/> 
        <MessageReceive/>
        <MessageSent/> 
        <MessageReceive/>
    </Container>
);

export default Chat;