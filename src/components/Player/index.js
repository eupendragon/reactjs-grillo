import React, { Component } from 'react';
import { Container, MusicPlayer } from './style';

import Back from '../../assets/images/iconBack.svg'
import Next from '../../assets/images/iconNext.svg'
import Play from '../../assets/images/iconPlay.svg'

export default class Player extends Component {
    render() {
        return (
            <Container>
                <MusicPlayer>
                    <div className="ContPlayer"></div>
                    <div className="ContImage"></div>
                    <div className="ContController">
                        <div className="MusicName">
                            <h3>Hey Jude!</h3>
                        </div>
                        <div className="Controllers">
                            <button>
                                <img src={Back} alt="" />
                            </button>
                            
                            <button>
                                <img src={Play} alt="" />
                            </button>

                            <button>
                                <img src={Next} alt="" />
                            </button>
                        </div>
                    </div>
                </MusicPlayer>
            </Container>
        );
    }
} 