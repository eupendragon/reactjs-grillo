// Dependecies
import React, { Component } from 'react';
// Styles
import {
    Container,
    Content,
    Scroll,
    Posts,
    NewPostContainer,
    Icons,
    PostForm,
    PostManager
} from './style';

// Components
import Menu from '../../components/Menu';
import MainHeader from '../../components/MainHeader';
import PostEvent from '../../components/PostEvent';

// images
import Cam from '../../assets/images/icon_photo.svg';
import YourProfile from '../../assets/images/arayaProfile.svg';
import IconEvent from '../../assets/images/postIconEvento.svg';
import IconVaga from '../../assets/images/postIconVaga.svg';

const Main = () => (
    <Container>
        <Menu />
        <Content>
            <MainHeader subTitle="NO GRILLO" />
            <Scroll>
                <NewPost />
                <Posts>
                    <PostEvent />
                    <PostEvent />
                </Posts>
            </Scroll>
        </Content>
    </Container>
);

export default Main;

class NewPost extends Component {
    
    handleImageChange = e => {
        let imageSpace = document.getElementById('postimage');
        let myImage = URL.createObjectURL(e.target.files[0]);
        imageSpace.style.backgroundImage = "url("+myImage+")";
    }

    selectPostType(){
        const NewStyle = "background: #42B5BC"
        const DefaultStyle = "background: #797979"

        const EventCheck = document.getElementById("checkPostEvento");
        const VagaCheck = document.getElementById("CheckPostVaga");
        
        const EventOp = document.getElementById("optionEvento");
        const VagaOp = document.getElementById("optionVaga");

        if(EventCheck.checked == true){
            EventOp.style.cssText = NewStyle;
        }else{
            EventOp.style.cssText = DefaultStyle;
        }
        if(VagaCheck.checked == true){
            VagaOp.style.cssText = NewStyle;
        }else{
            VagaOp.style.cssText = DefaultStyle;
        }
    }
    render() {
        return (
            <PostManager>
                <NewPostContainer>
                    <Icons>
                        <button>
                            <img src={YourProfile} alt="Ir para perfil" />
                        </button>

                        <label onClick={this.selectPostType} id="optionEvento" for="checkPostEvento">
                            <input type="radio" id="checkPostEvento" name="option" />
                            <img src={IconEvent} alt="Postar Evento" />
                        </label>
                        <span>EVENTO</span>

                        <label onClick={this.selectPostType} id="optionVaga" htmlFor="CheckPostVaga">
                            <input type="radio" id="CheckPostVaga" name="option" />
                            <img src={IconVaga} alt="Postar Vaga" />
                        </label>
                        <span>VAGA</span>
                    </Icons>
                    <PostForm>
                        <div id="postimage">
                            <input 
                                onChange={this.handleImageChange} 
                                id="perfil" 
                                type="file" 
                            />
                            <label for="perfil">
                                <img className="imgIcon" src={Cam} />
                            </label>
                        </div>
                        <div>
                            <input placeholder="TITULO DA POSTAGEM" type="text" />
                            <textarea placeholder="Descrição" type="text" />
                        </div>
                    </PostForm>
                </NewPostContainer>
                <button className="postar">POSTAR</button>
            </PostManager>
        );
    }
}