// Dependencies
import React, { Component } from 'react';
import api from '../../service/api';
// Styles
import {
    Container,
    Logo,
    Content,
    Stage,
    Photo,
    Form,
    FormAll,
    FormOla,
    FormLocal,
    FormVoce,
    FormEntra,
    Type,
    Image,
    Terms,
    Contract,
    Submit,
    Space,
    Tab
} from './style';

// Images
import Icon from '../../assets/images/icon_next.svg';
import Cam from '../../assets/images/icon_photo.svg';

import IconMusico from '../../assets/images/register_music.svg';
import IconBanda from '../../assets/images/register_banda.svg';
import IconFan from '../../assets/images/register_fan.svg';
import IconOrg from '../../assets/images/register_org.svg';
import IconPlace from '../../assets/images/register_place.svg';

import Local from '../../assets/images/img_registerLocal.svg';
import Musica from '../../assets/images/img_registerMusica.svg';
import Entrar from '../../assets/images/img_registerEntrar.svg';

class Register extends Component {

    state = {
        nome: '',
        estado: '',
        instrumento: '',
        outroInstrum: '',
        estilo: '',
        outroEstilo: '',
        login: '',
        email: '',
        cpf: '',
        senha: '',
    };

    handleImagChange = e => {
        let imgProfile = document.getElementById('imagePerfil');
        let myImg = URL.createObjectURL(e.target.files[0]);
        imgProfile.style.backgroundImage = "url(" + myImg + ")";
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {
            nome,
            estado,
            instrumento,
            outroInstrum,
            estilo,
            outroEstilo,
            login,
            email,
            cpf,
            senha
        } = this.state;

        const user = {
            nome: nome,
            estado: estado,
            instrumento: instrumento,
            outroInstrum: outroInstrum,
            estilo: estilo,
            outroEstilo: outroEstilo,
            login: login,
            email: email,
            cpf: cpf,
            senha: senha,
        }

        // await api.post('cadastro', user)

        // this.props.history.push('/');

        console.log(user);

    }

    naxtTab(tab) {
        const Ola = document.getElementById("tab1");
        const Local = document.getElementById("tab2");
        const Voce = document.getElementById("tab3");
        const Entra = document.getElementById("tab4");
        if (tab == 1) {
            Local.style.display = "none";
            Voce.style.display = "none";
            Entra.style.display = "none";

            Ola.style.display = "block";
        }
        if (tab == 2) {
            Ola.style.display = "none";
            Voce.style.display = "none";
            Entra.style.display = "none";

            Local.style.display = "block";
        }
        if (tab == 3) {
            Ola.style.display = "none";
            Local.style.display = "none";
            Entra.style.display = "none";

            Voce.style.display = "Block";
        }
        if (tab == 4) {
            Ola.style.display = "none";
            Local.style.display = "none";
            Voce.style.display = "none";

            Entra.style.display = "Block";
        }
    }

    render() {
        return (
            <Container>
                <Logo>
                    <h1>Grillo</h1>
                    <h3>CADASTRAR</h3>
                </Logo>
                <Content onSubmit={this.handleSubmit}>
                    <Stage>
                        <Tab onClick={() => this.naxtTab(1)}>Olá</Tab>
                        <Tab onClick={() => this.naxtTab(2)}>Local</Tab>
                        <Tab onClick={() => this.naxtTab(3)}>Você</Tab>
                        <Tab onClick={() => this.naxtTab(4)}>Entrar</Tab>
                    </Stage>

                    <FormOla>

                        <FormAll>
                            <Photo>
                                <div id="imagePerfil">
                                    <input onChange={this.handleImagChange} id="perfil" type="file" />
                                    <label for="perfil">
                                        <img src={Cam} />
                                    </label>
                                </div>
                            </Photo>
                            <Form>
                                <input
                                    name="nome"
                                    placeholder="Nome artístico "
                                    onChange={this.handleInputChange}
                                    value={this.state.nome}
                                />
                                <h3>EU SOU UM(A)</h3>
                            </Form>
                            <Type>
                                <label for="musico">
                                    <input id="musico" type="radio" name="tipo" />
                                    <img src={IconMusico} />
                                    <span>Musico</span>
                                </label>
                                <label for="banda">
                                    <input id="banda" type="radio" name="tipo" />
                                    <img src={IconBanda} />
                                    <span>Banda</span>
                                </label>
                                <label for="lugar">
                                    <input id="lugar" type="radio" name="tipo" />
                                    <img src={IconPlace} />
                                    <span>Lugar</span>
                                </label>
                                <label for="evento">
                                    <input id="evento" type="radio" name="tipo" />
                                    <img src={IconOrg} />
                                    <span>Eventos</span>
                                </label>
                                <label for="fa">
                                    <input id="fa" type="radio" name="tipo" />
                                    <img src={IconFan} />
                                    <span>Fã!</span>
                                </label>
                            </Type>
                            <Submit onClick={() => this.naxtTab(2)}>
                                <span>PRÓXIMO</span>
                                <img src={Icon} />
                            </Submit>
                        </FormAll>
                    </FormOla>

                    <FormLocal>
                        <FormAll>
                            <Image>
                                <img src={Local} />
                            </Image>
                            <Form>
                                <div>
                                    <label>Selecione o seu estado*</label>
                                    <select
                                        name="estado"
                                        onChange={this.handleInputChange}
                                        value={this.state.estado}>
                                        <option value="AC">Acre</option>
                                        <option value="AL">Alagoas</option>
                                        <option value="AP">Amapá</option>
                                        <option value="AM">Amazonas</option>
                                        <option value="BA">Bahia</option>
                                        <option value="CE">Ceará</option>
                                        <option value="DF">Distrito Federal</option>
                                        <option value="ES">Espírito Santo</option>
                                        <option value="GO">Goiás</option>
                                        <option value="MA">Maranhão</option>
                                        <option value="MT">Mato Grosso</option>
                                        <option value="MS">Mato Grosso do Sul</option>
                                        <option value="MG">Minas Gerais</option>
                                        <option value="PA">Pará</option>
                                        <option value="PB">Paraíba</option>
                                        <option value="PR">Paraná</option>
                                        <option value="PE">Pernambuco</option>
                                        <option value="PI">Piauí</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="RN">Rio Grande do Norte</option>
                                        <option value="RS">Rio Grande do Sul</option>
                                        <option value="RO">Rondônia</option>
                                        <option value="RR">Roraima</option>
                                        <option value="SC">Santa Catarina</option>
                                        <option value="SP">São Paulo</option>
                                        <option value="SE">Sergipe</option>
                                        <option value="TO">Tocantins</option>
                                        <option value="EX">Estrangeiro</option>
                                    </select>
                                </div>
                            </Form>
                            <Submit onClick={() => this.naxtTab(3)}>
                                <span>PRÓXIMO</span>
                                <img src={Icon} />
                            </Submit>
                        </FormAll>
                    </FormLocal>

                    <FormVoce>
                        <FormAll>
                            <Image>
                                <img src={Musica} />
                            </Image>
                            <Form>
                                <div>
                                    <label>Qual instrumento você toca?*</label>
                                    <select
                                        name="instrumento"
                                        onChange={this.handleInputChange}
                                        value={this.state.instrumento}>
                                        <option value="Violão">Violão</option>
                                        <option value="Guitarra">Guitarra</option>
                                        <option value="Bateria">Bateria</option>
                                        <option value="Flauta">Flauta</option>
                                        <option value="Gaita">Gaita</option>
                                        <option value="Pandeiro">Pandeiro</option>
                                        <option value="Teclado">Teclado</option>
                                        <option value="Triangulo">Triangulo</option>
                                        <option value="Violino">Violino</option>
                                        <option value="Ukulelê">Ukulelê</option>
                                    </select>
                                </div>
                                <div>
                                    <input
                                        name="outroInstrum"
                                        placeholder="Não encontrou? Digite aqui o nome do seu instrumento"
                                        onChange={this.handleInputChange}
                                        value={this.state.outroInstrum}
                                    />
                                </div>
                                <div>
                                    <label>Qual o seu estilo musical?*</label>
                                    <select name="estilo"
                                        onChange={this.handleInputChange}
                                        value={this.state.estilo}>
                                        <option value="Pop">Pop</option>
                                        <option value="Rag">Rag</option>
                                        <option value="Funk">Funk</option>
                                        <option value="Eletrônica">Eletronica</option>
                                        <option value="Forró">Forró</option>
                                        <option value="Sertanejo">Sertanejo</option>
                                        <option value="MPB">MPB</option>
                                        <option value="Góspel">Góspel</option>
                                        <option value="Axé">Axé</option>
                                        <option value="Clássica">Clássica</option>
                                    </select>
                                </div>
                                <div>
                                    <input
                                        name="outroEstilo"
                                        placeholder="Outro"
                                        onChange={this.handleInputChange}
                                        value={this.state.outroEstilo}
                                    />
                                </div>
                            </Form>
                            <Submit onClick={() => this.naxtTab(4)}>
                                <span>PRÓXIMO</span>
                                <img src={Icon} />
                            </Submit>
                        </FormAll>
                    </FormVoce>
                    <FormEntra>
                        <FormAll>
                            <Image>
                                <img src={Entrar} />
                            </Image>
                            <Form>
                                <label>Agora falta pouco!</label>
                                <div>
                                    <input
                                        name="login"
                                        onChange={this.handleInputChange}
                                        value={this.state.login}
                                        placeholder="Digite um login"
                                    />
                                    <input
                                        name="email"
                                        onChange={this.handleInputChange}
                                        value={this.state.email}
                                        type="email"
                                        placeholder="Seu e-mail"
                                    />
                                    <input
                                        name="cpf"
                                        onChange={this.handleInputChange}
                                        value={this.state.cpf}
                                        placeholder="CPF"
                                    />
                                    <input
                                        name="senha"
                                        onChange={this.handleInputChange}
                                        value={this.state.senha}
                                        type="password"
                                        placeholder="Senha secreta"
                                    />
                                    <input
                                        name="confSenha"
                                        type="password"
                                        placeholder="Confirmar senha"
                                    />
                                </div>
                            </Form>
                            <Contract>
                                <div>
                                    <Terms type="checkbox" id="termos" />
                                    <label for="termos">Ao prosseguir declaro que li, entendi e concordo com os <u>Termos de Uso</u> e de <u>Serviço</u> do Grillo.</label>
                                </div>
                            </Contract>

                            <Submit>
                                <span>FINALIZAR</span>
                            </Submit>

                        </FormAll>
                    </FormEntra>
                </Content>
                <Space>
                </Space>
            </Container >
        );
    }
}


export default Register;
