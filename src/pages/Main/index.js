// Dependecies
import React, { Component } from 'react';
// Styles
import { Container, Content, Scroll, Posts, NewPostContainer, Icons, PostForm } from './style';
// Components
import Menu from '../../components/Menu';
import MainHeader from '../../components/MainHeader';
import PostEvent from '../../components/PostEvent';

// images
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
    render() {
        return (
            <NewPostContainer>
                <Icons>
                    <button>
                        <img src={YourProfile} alt="Ir para perfil" />
                    </button>

                    <label htmlFor="evento">
                        <input type="radio" id="evento" checked name="option" />
                        <img src={IconEvent} alt="Postar Evento" />
                    </label>
                    <span>EVENTO</span>

                    <label htmlFor="vaga">
                        <input type="radio" id="vaga" name="option" />
                        <img src={IconVaga} alt="Postar Vaga" />
                    </label>
                    <span>VAGA</span>
                </Icons>
                <PostForm>
                    <div>
                        <h1>+</h1>
                    </div>
                </PostForm>
            </NewPostContainer>
        );
    }
}