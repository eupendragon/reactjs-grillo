// Dependecies
import React, { Component } from 'react';
// Styles
import {
    Container,
    Content,
    NewMusic,
    MusicAndTitle,
    Capa
} from './style';

// Components
import Menu from '../../components/Menu';
import MainHeader from '../../components/MainHeader';

// Images
import Cam from '../../assets/images/icon_photo.svg';


export class Musics extends Component {
    state = {
        MusicTitle: '',
        MusicImage: null,
        Music: null,
    }

    handleImageChange = e => {
        let ImageSpace = document.getElementById("imageSpace")
        let MyImage = URL.createObjectURL(e.target.files[0])

        ImageSpace.style.backgroundImage = "url(" + MyImage + ")"
        this.setState({ MusicImage: e.target.files[0] })
    }

    handleMusicChange = e => {
        let Player = document.getElementById("playerPreview")
        let MyMusic = URL.createObjectURL(e.target.files[0])
        this.setState({ MyMusic: e.target.files[0] });
        Player.src = MyMusic;
    }

    handleSubmit = e => {
        e.prevetDefault();
    }

    render() {
        return (
            <Container>
                <Menu />
                <Content>
                    <MainHeader subTitle="MÚSICAS" />
                    <NewMusic>
                        <Capa id="imageSpace">
                            <input
                                onChange={this.handleImageChange}
                                id="capa"
                                type="file"
                                accept=".png, .jpg, .jpeg"
                            />
                            <label for="capa">
                                <img className="imgIcon" src={Cam} />
                            </label>
                        </Capa>
                        <MusicAndTitle>
                            <input placeholder=" |  TITULO DA MÚSICA" type="text" />
                            <audio controls src id="playerPreview"></audio>
                            <label htmlFor="music">
                                <input 
                                    onChange={this.handleMusicChange}
                                    type="file" 
                                    id="music"
                                    accept=".mp3, .mp4, .mpeg"/>
                                <span>Carregar Musica</span>
                            </label>
                        </MusicAndTitle>
                    </NewMusic>
                </Content>
            </Container>
        );
    }
}

export default Musics;