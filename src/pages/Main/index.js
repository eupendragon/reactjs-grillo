// Dependecies
import React, {Component} from 'react';
// Styles
import { Container, Content, Posts } from './style';
// Components
import Menu from '../../components/Menu';
import MainHeader from '../../components/MainHeader';
import PostEvent from '../../components/PostEvent';

const Main = () => (
    <Container>
        <Menu />
        <Content>
            <MainHeader subTitle="EVENTOS PRÓXIMOS"/>
            <NewPost/>
            <Posts>
                <PostEvent />
                <PostEvent />
                <PostEvent />
                <PostEvent />
            </Posts>
        </Content>
    </Container>
);

export default Main;

class NewPost extends Component{
    render(){
        return(
            <NewPostContainer>
            </NewPostContainer>
        );
    }
}