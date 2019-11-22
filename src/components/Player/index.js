import React, { Component } from 'react'
import {api} from '../../api/APIUtils'

import { Container, MusicPlayer, ControllButton } from './style'

// Icons
import Back from '../../assets/images/iconBack.svg'
import Next from '../../assets/images/iconNext.svg'
import Pause from '../../assets/images/iconPause.svg'
import Play from '../../assets/images/iconPlay.svg'

export default class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playlist: [],
            musicname:'',
            isPlay: false,
        }
    }

    async componentDidMount(){
        const response = await api.get('music/all')
        this.setState({playlist: response.data[0].audio})
        console.log(this.state.playlist[0].audio)
    }

    handleChangeMusic() {
        const player = {
            banner: document.querySelector(".ContImage"),
            title: document.querySelector(".MusicName h3"),
            audio: document.querySelector("audio")
        }

        if (this.state.isPlay === false) {
            player.audio.play();
        }
        else {
            player.audio.pause();
        }

    }

    controlButtonChange(action) {
        if (action == 1) {
            this.handleChangeMusic();
            this.setState({ isPlay: !this.state.isPlay })
        }

        else if (action == 2) {
            this.handleChangeMusic(1);
        }

        else {
        }
    }

    render() {
        const { isPlay, playlist } = this.state;
        return (
            <Container>
                <MusicPlayer>
                    <div className="ContPlayer"></div>
                    <div className="ContImage"></div>
                    <div className="ContController">
                        <div className="MusicName">
                            <h3>Start</h3>
                        </div>
                        <div className="Controllers">
                            <audio src={`http://localhost:3333/musics/${playlist}`}/>
                            <ControllButton
                                onClick={() => this.controlButtonChange(3)}
                                id="back" >
                                <img src={Back} alt="" />
                            </ControllButton>

                            <ControllButton
                                isPlay={isPlay}
                                onClick={() => this.controlButtonChange(1)}
                                id="play">
                                {isPlay ? <img src={Pause} alt="" /> : <img src={Play} alt="" />}
                            </ControllButton>

                            <ControllButton
                                onClick={() => this.controlButtonChange(2)}
                                id="next">
                                <img src={Next} alt="" />
                            </ControllButton>
                        </div>
                    </div>
                </MusicPlayer>
            </Container>
        );
    }
} 