import React from 'react';
import { Container, BoxSent, MessageReceive, BoxReceive, MessageSent } from './style';

export default function Chat({ MensagemContent }) {
    return (
        <Container>
        </Container>
    );
}

const YourMessage = () => (
    <MessageReceive>
        <BoxReceive>
        </BoxReceive>
    </MessageReceive>
);

const MyMessage = (MensagemContent) => (
    <MessageSent>
        <BoxSent>
        </BoxSent>
    </MessageSent>
);