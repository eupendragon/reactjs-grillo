import React, { Component } from 'react';
import { Container, MusicPlayer, ControllButton } from './style';

// Images
import LinkinPark from '../../assets/images/intheend.jpg';
import Konai from '../../assets/images/konai.jpg';
import Lagum from '../../assets/images/lagum.jpg';

// Musics
import InTheEnd from '../../assets/music/intheend.mp3';
import Estacoes from '../../assets/music/konai.mp3';
import Deixa from '../../assets/music/lagum.mp3';

// Icons
import Back from '../../assets/images/iconBack.svg';
import Next from '../../assets/images/iconNext.svg';
import Pause from '../../assets/images/iconPause.svg';
import Play from '../../assets/images/iconPlay.svg';

export default class Player extends Component {
    state = {
        isPlay: false,
    }
    handleChangeMusic() {
        const player = {
            banner: document.querySelector(".ContImage"),
            title: document.querySelector(".MusicName h3"),
            audio: document.querySelector("audio")
        }
        const musicList = [
            {
                banner: `url(${LinkinPark}`,
                title: "In The End",
                audio: InTheEnd,
            },
            {
                banner: `url(${Konai})`,
                title: "4 Estações ",
                audio: Estacoes,
            },
            {
                banner: `url(${Lagum})`,
                title: "Deixa",
                audio: Deixa,
            }
        ]

        player.banner.style.backgroundImage = musicList[2].banner;
        player.title.innerText = musicList[2].title;
        player.audio.src = musicList[2].audio;

        if(this.state.isPlay === false){
            player.audio.play();
        }
        else{
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
        const { isPlay } = this.state;
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
                            <audio src=""></audio>

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