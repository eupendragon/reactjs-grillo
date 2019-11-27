import React, { Component } from 'react';
import { Container, Content, EventContainer, Album, Info } from './style';
import { api } from '../../api/APIUtils'

export default class EventList extends Component {
    state = {
        events: [],
    }
    async componentDidMount() {
        const MyInfo = JSON.parse(localStorage.getItem('@CacheGrillo:Results'))
        const MyEvents = await api.get(`events?userId=${MyInfo._id}`)
        await this.setState({ events: MyEvents.data })
    }

    render() {
        const formatDate = date => {
            let data = date
            let array = new Array();

            array = data.split('-')

            switch (array[1]) {
                case '01':
                    array[1] = 'JAN'
                    break;
                case '02':
                    array[1] = 'FEV'
                    break;
                case '03':
                    array[1] = 'MAR'
                    break;
                case '04':
                    array[1] = 'ABR'
                    break;
                case '05':
                    array[1] = 'MAI'
                    break;
                case '06':
                    array[1] = 'JUN'
                    break;
                case '07':
                    array[1] = 'JUL'
                    break;
                case '08':
                    array[1] = 'AGO'
                    break;
                case '09':
                    array[1] = 'SET'
                    break;
                case '10':
                    array[1] = 'OUT'
                    break;
                case '11':
                    array[1] = 'NOV'
                    break;
                case '12':
                    array[1] = 'DEZ'
                    break;
                default:
                    break;
            }

            let newDate = (array[1] + " de " + array[0])

            return newDate
        }
        return (
            <Container>
                <span>EVENTOS</span>
                <Content>
                    {this.state.events.slice(0, 3).map(event => (
                        <EventContainer key={event._id}>
                            <Album style={{ backgroundImage: `url(https://3333-dfd00ddf-cd28-4c87-acca-6c3ec15debdb.ws-us02.gitpod.io/files/${event.image})` }}>
                            </Album>
                            <Info>
                                <h3>{event.postTitle}</h3>
                                <p>{formatDate(event.date)}</p>
                            </Info>
                        </EventContainer>
                    ))}
                </Content>
                <button>VER MAIS</button>
            </Container>
        )
    }
}
