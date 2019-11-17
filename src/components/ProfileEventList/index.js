import React from 'react';
import { Container, Content} from './style';
import EventItem from '../ProfileEventItem';

const EventList = () => (
    <Container>
        <span>EVENTOS</span>
        <Content>
            <EventItem/>
            <EventItem/>
            <EventItem/>
        </Content>
        <button>VER MAIS</button>
    </Container>
);

export default EventList;
