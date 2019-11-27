// Dependecies
import React, { Component } from 'react';
// Styles
import {
    Container,
    Content,
    Chats,
    Messages,
    Local,
    ListContent,
    Item,
    Image,
    Inscribe,
    ImageInscribe,
    Details,
    Name,
    Friends
} from './style';
// Components
import Menu from '../../components/Menu';
import Search from '../../components/Search';

import Flyer from '../../assets/images/flyerEvent2.svg';
import Profile from '../../assets/images/profileTeste.jpg';
import Send from '../../assets/images/icon_sendMsg.svg';

import { api } from '../../api/APIUtils'
import io from 'socket.io-client'

export default class Events extends Component {
    state = {
        participants: [],
        postTitle: 'Selecione um evento',
        events: [],
        user: JSON.parse(localStorage.getItem('@CacheGrillo:User'))
    }

    async componentDidMount() {
        this.registerToSocket();

        const response = await api.get(`events?userId=${this.state.user._id}`);
        this.setState({ 
            events: response.data,
        })
        console.log(response.data)
    }

    registerToSocket() {
        const socket = io('https://3333-a6ed127b-4d1f-4137-ae95-f5bd4566c8b0.ws-us02.gitpod.io/');

        socket.on('participants', newParticipant => {
            console.log(newParticipant)
            this.setState({ participants: [newParticipant, ...this.state.participants] });
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
                            <h4>EVENTOS</h4>
                        </Local>
                        <ListContent>
                            {this.state.events.map(key => (
                                <Item key={key._id} onClick={async () => {
                                    await 
                                    this.setState({
                                        postTitle: key.postTitle,
                                        participants: key.participants
                                    })
                                    console.log(this.state.participants)
                                }}>
                                    <Image>
                                        <img src={`https://3333-a6ed127b-4d1f-4137-ae95-f5bd4566c8b0.ws-us02.gitpod.io/files/${key.image}`} />
                                    </Image>
                                    <Friends>
                                        <h3> {key.postTitle} </h3>
                                        <span> {key.date} </span>
                                    </Friends>
                                </Item>
                            ))}
                        </ListContent>
                    </Chats>
                    <Messages>
                        <Search />
                        <h3>{this.state.postTitle}</h3>
                        <span>INSCRITOS NO EVENTO</span>
                        {
                            this.state.participants.map((key) => (
                                <Inscribe key={key._id}>
                                    <div>
                                        <ImageInscribe>
                                            <img src={`https://3333-a6ed127b-4d1f-4137-ae95-f5bd4566c8b0.ws-us02.gitpod.io/files/${key.image}`} />
                                        </ImageInscribe>
                                        <Name>{key.nome}</Name>
                                    </div>
                                    <Details>
                                        <button>
                                            <img src={Send} />
                                        </button>
                                    </Details>
                                </Inscribe>
                            ))
                        }
                    </Messages>
                </Content>
            </Container>
        )
    }
}
