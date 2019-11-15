// Dependecies
import React from 'react';
// Styles
import {
    Container,
    Content,
    FormAll,
    OpEvento,
    Time,
    Place,
    BtnForm,
    UploadPhoto
} from './style';
// Components
import Menu from '../../components/Menu';
import MainHeader from '../../components/MainHeader';
// Images
import iconCam from '../../assets/images/icon_photo.svg';

const Profile = () => (
    <Container>
        <Menu />
        <Content>
            <MainHeader subTitle="SEU PERFIL" />
        </Content>
    </Container>
);

export default Profile;