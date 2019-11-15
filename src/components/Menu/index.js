// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Styles
import './styles.css';
// Images
import Profile from '../../assets/images/arayaProfile.svg';
// Icons
import GrilloIcon from '../../assets/images/menu-icon_grillos.svg';
import MsgIcon from '../../assets/images/menu-icon_msg.svg';
import EventsIcon from '../../assets/images/menu-icon_events.svg';
import MusicsIcon from '../../assets/images/menu-icon_musics.svg';

import Player from '../../components/Player';

class Menu extends Component {
    render() {
        return (
            <div className="tudo">
                <div className="menu">
                    {/* PERFIL */}
                    <Link to="./profile" className="Link">
                        <div className="profile opSelect">
                            <div className="circle">
                                <img src={Profile} />
                            </div>
                            <div className="infoProfile">
                                <p className="nameProfile">Olá, Araya!</p>
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
        )
    }
}


export default Menu;