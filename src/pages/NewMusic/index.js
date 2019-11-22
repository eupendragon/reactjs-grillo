// Dependecies
import React, { Component } from 'react'
import {api} from '../../api/APIUtils'
// Styles
import {
    Container,
    Content,
    NewMusic,
    MusicAndTitle,
    Capa
} from './style'

// Components
import Menu from '../../components/Menu'
import MainHeader from '../../components/MainHeader'

// Images
import Cam from '../../assets/images/icon_photo.svg'


export class Musics extends Component {
    state = {
        MusicTitle: '',
        MusicImage: null,
        MyMusic: null,
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
    handleInputChange = e =>{
        this.setState({MusicTitle: e.target.value})
    }
    handleSubmit = async e => {
        e.preventDefault();

        const musicData = new FormData
        musicData.append('musicName',this.state.MusicTitle)
        musicData.append('image',this.state.MusicImage)
        musicData.append('audio',this.state.MyMusic)

        await api.post('music', musicData)

    }

    render() {
        return (
            <Container>
                <Menu />
                <Content>
                    <MainHeader subTitle="MÚSICAS" />
                    <NewMusic onSubmit={this.handleSubmit}>
                        <Capa id="imageSpace">
                            <input
                                onChange={this.handleImageChange}
                                id="capa"
                                type="file"
                                accept=".png, .jpg, .jpeg"
                            />
                            <label htmlFor="capa">
                                <img className="imgIcon" src={Cam} />
                            </label>
                        </Capa>
                        <MusicAndTitle>
                            <input 
                                onChange={this.handleInputChange} 
                                value={this.state.MusicTitle}
                                placeholder=" |  TITULO DA MÚSICA" 
                                type="text"
                            />
                            <audio controls id="playerPreview"></audio>
                            <label htmlFor="music">
                                <input 
                                    onChange={this.handleMusicChange}
                                    type="file" 
                                    id="music"
                                    accept=".mp3, .mp4, .mpeg"/>
                                <span>Carregar Musica</span>
                            </label>
                            <button type="submit">cadastrar</button>
                        </MusicAndTitle>
                    </NewMusic>
                </Content>
            </Container>
        );
    }
}

export default Musics;