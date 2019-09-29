import React from 'react';
import {WritteMessage} from './style';
import SendIcon from '../../assets/images/icon_send.svg';

const SendMessage = () => (
    <WritteMessage>
        <input
            placeholder="Digite sua mensagem"
        />
        <img src={SendIcon} alt="enviar" />
    </WritteMessage>
);

export default SendMessage;