import React from 'react';
import { Container, BoxSent, MessageReceive, BoxReceive, MessageSent } from './style';

export default function Chat() {
    return (
        <Container>
            <YourMessage/>
            <MyMessage/>
        </Container>
    );
}

const YourMessage = () => (
    <MessageReceive>
        <BoxReceive>
            <p>Mensagem recebida</p>
        </BoxReceive>
    </MessageReceive>
);

const MyMessage = () => (
    <MessageSent>
        <BoxSent>
            <p>Mensagem Enviada</p>
        </BoxSent>
    </MessageSent>
);