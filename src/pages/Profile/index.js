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
import ProfileMenu from '../../components/ProfileMenu';
// Images
import iconCam from '../../assets/images/icon_photo.svg';

const Profile = () => (
    <Container>
        <Menu />
        <Content>
            <MainHeader subTitle="GERENCIAMENTO" />
            <ProfileMenu />
            {/* <FormPerfil /> */}
            {/* <FormMusica /> */}
            {/* <FormEvento /> */}
            <FormVagas />
        </Content>
    </Container>
);

const FormPerfil = () => (
    <FormAll>
        <UploadPhoto>
            <img src={iconCam} />
            <button>PERFIL E CAPA</button>
        </UploadPhoto>
        <div>
            <input placeholder="João Araya" />
            <input placeholder="Local" />
            <textarea placeholder="Descrição de como você é incrivel. Venda sua imagem!" />
            <button>SALVAR</button>
        </div>
    </FormAll>
);

const FormMusica = () => (
    <FormAll>
        <UploadPhoto>
            <img src={iconCam} />
            <button>CAPA</button>
        </UploadPhoto>
        <div>
            <h3>Selecione uma música</h3>
            <select>
                <option>Lua nova</option>
                <option>Esquecido na esquina</option>
                <option>Entre a amiga e o amigo</option>
                <option>Mais que "pá" sempre</option>
                <option>I love seus cabe lo</option>
                <option>  - Adicionar nova</option>
            </select>
            <input placeholder="Título da Música" />
            <select>
                <option>Gênero</option>
                <option>Indie</option>
                <option>Funk</option>
                <option>Samba</option>
                <option>Sertanejo</option>
                <option>Axé</option>
            </select>
            <select>
                <option>Album</option>
                <option>Fantasy</option>
                <option>Fantasy</option>
                <option>Fantasy</option>
                <option>Fantasy</option>
                <option> - Adicionar novo</option>
            </select>
            <BtnForm>
                <button>EXCLUIR</button>
                <button>SALVAR</button>
            </BtnForm>
        </div>
    </FormAll>
);


const FormEvento = () => (
    <OpEvento>
        <div>
            <img src={iconCam} />
            <button>CAPA</button>
        </div>
        <div>
            <h3>Selecione o evento</h3>
            <select>
                <option>The Week</option>
                <option>Babylon</option>
                <option>More Fire</option>
                <option>  - Adicionar novo</option>
            </select>
            <input type="text" placeholder="Nome do Evento" />
            <Place>
                <select>
                    <option>Estado</option>
                    <option>SP</option>
                    <option>MG</option>
                </select>
                <select readonly="true">
                    <option>Cidade</option>
                </select>
            </Place>
            <Time>
                <input type="date" />
                <input type="time" />
                <input type="time" />
            </Time>
            <textarea placeholder="Descrição do evento" />
            <BtnForm>
                <button>EXCLUIR</button>
                <button>SALVAR</button>
            </BtnForm>
        </div>
    </OpEvento>
);


const FormVagas = () => (
    <FormAll>
        <UploadPhoto>
            <img src={iconCam} />
            <button>CAPA</button>
        </UploadPhoto>
        <div>
            <h3>Selecione uma vaga</h3>
            <select>
                <option>The Week</option>
                <option>Babylon</option>
                <option>More Fire</option>
                <option>  - Adicionar novo</option>
            </select>
            <Place>
                <select>
                    <option>Estado</option>
                    <option>SP</option>
                    <option>MG</option>
                </select>
                <select readonly="true">
                    <option>Cidade</option>
                </select>
            </Place>
            <Time>
                <input type="date" />
                <input type="date" />
            </Time>
            <textarea placeholder="Descrição do evento" />
            <BtnForm>
                <button>EXCLUIR</button>
                <button>SALVAR</button>
            </BtnForm>
        </div>
    </FormAll>
);



export default Profile;