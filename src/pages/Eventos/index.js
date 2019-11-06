// Dependecies
import React from 'react';
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

import ViewProf from '../../assets/images/iconProfile.svg';

const Events = () => (
    <Container>
        <Menu />
        <Content>
            <Chats>
                <h1>Grillo</h1>
                <Local>
                    <h4>EVENTOS</h4>
                </Local>
                <EventList />
            </Chats>
            <Messages>
                <Search />
                <h3>Babylon</h3>
                <span>INSCRITOS NO EVENTO</span>
                <EventInscribes />
            </Messages>
        </Content>
    </Container>
);
export default Events;


const EventList = () => (
    <ListContent>
        <EventItem />
    </ListContent>
);


const EventItem = () => (
    <Item>
        <Image>
            <img src={Flyer} />
        </Image>
        <Friends>
            <h3> Babylon </h3>
            <span> 25/10/2019</span>
        </Friends>
    </Item>
);


const EventInscribes = () => (
    <Inscribe>
        <div>
            <ImageInscribe>
                <img src={Profile} />
            </ImageInscribe>
            <Name>Juhianna Berezin</Name>
        </div>
        <Details>
            <button>
                <img src={Send} />
            </button>
        </Details>
    </Inscribe>
);