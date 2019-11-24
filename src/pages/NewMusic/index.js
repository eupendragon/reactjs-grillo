// Dependecies
import React, { Component } from 'react'
import { api } from '../../api/APIUtils'
// Styles
import {
    Container,
    Content,
    Tabs,
    NewMusic,
    FormMusic,
    ProgressCircle,
    MusicUpload,
    FormArt,
    FormName,
    Capa,
} from './style'

// Components
import Menu from '../../components/Menu'
import MainHeader from '../../components/MainHeader'

// Images
import Cam from '../../assets/images/icon_photo.svg'
import Play from '../../assets/images/playpreview.svg'
import ProgressIcon from '../../assets/images/progressIcon.svg'
import { Player } from '../Musics/style'

export class Musics extends Component {
    state = {
        MusicTitle: '',
        MusicImage: null,
        MyMusic: null,
    }

    handleImageChange = e => {
        let ImageSpace = document.getElementById("imageSpace")
        let SecondImageSpace = document.getElementById("tabimage")
        let MyImage = URL.createObjectURL(e.target.files[0])

        ImageSpace.style.backgroundImage = "url(" + MyImage + ")"
        SecondImageSpace.style.backgroundImage = "url(" + MyImage + ")"
        this.setState({ MusicImage: e.target.files[0] })
    }

    handleMusicChange = e => {
        let Player = document.getElementById("playerPreview")
        let MyMusic = URL.createObjectURL(e.target.files[0])

        // Animation ==============================================
        let PlayMusic = document.getElementById('playpreview')
        PlayMusic.src = ProgressIcon
        this.progressAnimation()
        // ========================================================

        this.setState({ MyMusic: e.target.files[0] });
        // Player.src = MyMusic;
    }

    progressAnimation() {
        let ProgressCircle = document.getElementById('progressCircle')
        let PlayMusic = document.getElementById('playpreview')
        let id = setInterval(frame, 15)
        let width = 1
        let height = 1

        function frame() {
            if (width >= 100 && height >= 100) {
                clearInterval(id)
            }
            else {
                width++
                height++
                ProgressCircle.style.width = width + '%'
                ProgressCircle.style.height = height + '%'
                setTimeout(() => PlayMusic.src = Play, 2000)
            }
        }
    }

    handleInputChange = e => {
        this.setState({ MusicTitle: e.target.value })
    }
    handleSubmit = async e => {
        e.preventDefault()

        const musicData = new FormData
        musicData.append('musicName', this.state.MusicTitle)
        musicData.append('image', this.state.MusicImage)
        musicData.append('audio', this.state.MyMusic)

        await api.post('music', musicData)
        this.props.history.push('/musics')

    }

    nextTab(tab) {
        const Music = document.getElementById("tab1");
        const Art = document.getElementById("tab2");
        const Name = document.getElementById("tab3");

        const TitleMusic = document.getElementById("tabTitle1");
        const TitleArt = document.getElementById("tabTitle2");
        const TitleName = document.getElementById("tabTitle3");

        const TitleTabStyle = "color: #FFF; border-bottom: 2px solid #FFF; filter: opacity(1)";
        const TitleTabResetStyle = "filter: opacity(0.3); border: none";

        if (tab == 1) {
            Art.style.display = "none";
            Name.style.display = "none";

            TitleArt.style.cssText = TitleTabResetStyle;
            TitleName.style.cssText = TitleTabResetStyle;

            Music.style.display = "block";
            TitleMusic.style.cssText = TitleTabStyle;
        }
        if (tab == 2) {
            Music.style.display = "none";
            Name.style.display = "none";

            TitleMusic.style.cssText = TitleTabResetStyle;
            TitleName.style.cssText = TitleTabResetStyle;

            TitleArt.style.cssText = TitleTabStyle;
            Art.style.display = "block";
        }
        if (tab == 3) {
            Music.style.display = "none";
            Art.style.display = "none";

            TitleMusic.style.cssText = TitleTabResetStyle;
            TitleArt.style.cssText = TitleTabResetStyle;

            TitleName.style.cssText = TitleTabStyle;
            Name.style.display = "Block";
        }
    }

    render() {
        return (
            <Container>
                <Menu />
                <Content>
                    <MainHeader subTitle="MÚSICAS" />
                    <Tabs>
                        <h2 id="tabTitle1" onClick={() => this.nextTab(1)}>SUA MÚSICA</h2>
                        <h2 id="tabTitle2" onClick={() => this.nextTab(2)}>CAPA E ARTE</h2>
                        <h2 id="tabTitle3" onClick={() => this.nextTab(3)}>NOME E DETALHES</h2>
                    </Tabs>
                    <NewMusic onSubmit={this.handleSubmit}>
                        <FormMusic>
                            <div className="DefaultStyle">
                                <ProgressCircle>
                                    <div id="progressCircle">
                                        <img src={ProgressIcon} id="playpreview" />
                                    </div>
                                    <audio id="playerpreview" />
                                </ProgressCircle>
                                <MusicUpload>
                                    <input
                                        onChange={this.handleMusicChange}
                                        type="file"
                                        id="music"
                                        accept=".mp3, .mp4, .mpeg"
                                    />
                                    <button type="button">
                                        <label htmlFor="music">
                                            ENVIE SUA MÚSICA
                                        </label>
                                    </button>
                                </MusicUpload>
                            </div>
                        </FormMusic>

                        <FormArt>
                            <div>
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
                                <button type="button">
                                    <label htmlFor="capa">
                                        ENVIE SUA ARTE
                                    </label>
                                </button>
                            </div>
                        </FormArt>

                        <FormName>
                            <div>
                                <section id="tabimage">
                                </section>
                                <aside>
                                    <input
                                        onChange={this.handleInputChange}
                                        value={this.state.MusicTitle}
                                        placeholder=" | Título da Música"
                                        type="text"
                                    />
                                    <button type="submit">CADASTRAR</button>
                                </aside>
                            </div>
                        </FormName>
                    </NewMusic>
                </Content>
            </Container>
        );
    }
}

export default Musics;