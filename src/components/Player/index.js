import React, { Component } from 'react';
import { Container, MusicPlayer } from './style';

// Images
import PlayerBanner from '../../assets/images/playerban.jpg';
import LinkinPark from '../../assets/images/intheend.jpg';


// Musics
import InTheEnd from '../../assets/music/intheend.mp3';

// Icons
import Back from '../../assets/images/iconBack.svg';
import Next from '../../assets/images/iconNext.svg';
import Play from '../../assets/images/iconPlay.svg';

export default class Player extends Component {

    handleChangeMusic = e => {
        const banner = document.querySelector(".ContImage");
        const title = document.querySelector(".MusicName h3");
        const audio = document.querySelector("audio");

        const data = {
            banner: LinkinPark,
            title: "In The End",
            audio: InTheEnd
        }

        banner.style.backgroundImage = `url(${data.banner})`;
        title.innerText = data.title;
        audio.src = data.audio;

        audio.play();
    }

    render() {
        return (
            <Container>
                <MusicPlayer>
                    <div className="ContPlayer"></div>
                    <div className="ContImage"></div>
                    <div className="ContController">
                        <div className="MusicName">
                            <h3></h3>
                        </div>
                        <div className="Controllers">
                            <audio src=""></audio>
                            <button id="back">
                                <img src={Back} alt="" />
                            </button>

                            <button id="play">
                                <img src={Play} alt="" />
                            </button>

                            <button id="next">
                                <img src={Next} alt="" onClick={this.handleChangeMusic} />
                            </button>
                        </div>
                    </div>
                </MusicPlayer>
            </Container>
        );
    }
} 