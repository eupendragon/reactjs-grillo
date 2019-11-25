// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Icons
import GrilloIcon from '../../assets/images/menu-icon_grillos.svg';
import MsgIcon from '../../assets/images/menu-icon_msg.svg';
import EventsIcon from '../../assets/images/menu-icon_events.svg';
import MusicsIcon from '../../assets/images/menu-icon_musics.svg';

import Player from '../../components/Player';
import { ContainerMenu } from './style';

// import styled from 'styled-components'

class Menu extends Component {
    constructor(props){
        super(props)
            this.state = {
                userName: '',
                image: null
            }
    }
    async componentDidMount() {
        const user = await JSON.parse(localStorage.getItem('@CacheGrillo:User'))
        const { nome, image } = user
        const [firstname] = nome.split(' ')
        const imageProfile = `http://localhost:3333/files/${image}`
        this.setState({ userName: firstname, image: imageProfile })
    }
    render() {
        const { userName, image } = this.state
        return (
            <ContainerMenu>
                <div className="tudo">
                    <div className="menu">
                        {/* PERFIL */}
                        <Link to="./profile" className="Link">
                            <div className="profile opSelect">
                                <div style={{backgroundImage: "url("+image+")"}} className="circle">
                                </div>
                                <div className="infoProfile">
                                    <p className="nameProfile">Olá, {userName}</p>
                                </div>
                            </div>
                        </Link>
                        {/* OPÇÕES DO MENU */}
                        <div className="menuOptions">
                            <Link to="./main" className="Link">
                                <div className="option opSelect">
                                    <div className="icon">
                                        <img src={GrilloIcon} />
                                    </div>
                                    <p>GRILLOS</p>
                                </div>
                            </Link>
                            <Link to="./contacts" className="Link">
                                <div className="option opSelect">
                                    <div className="icon">
                                        <img src={MsgIcon} />
                                    </div>
                                    <p>MENSAGENS</p>
                                </div >
                            </Link>
                            <Link to="./events" className="Link">
                                <div className="option opSelect">
                                    <div className="icon">
                                        <img src={EventsIcon} />
                                    </div>
                                    <p>EVENTOS</p>
                                </div>
                            </Link>
                            <Link to="./musics" className="Link">
                                <div className="option opSelect">
                                    <div className="icon">
                                        <img src={MusicsIcon} />
                                    </div>
                                    <p>MÚSICAS</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <Player />
                </div>
            </ContainerMenu>
        )
    }
}


export default Menu;