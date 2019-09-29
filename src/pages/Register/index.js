// Dependencies
import React, { Component } from 'react';
// Styles
import {
    Container,
    Logo,
    Content,
    Stage,
    FormAll,
    Photo,
    Form,
    Type,
    Image,
    Terms,
    Contract,
    Space
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

import {Link} from 'react-router-dom';

class Register extends Component {
    state = {
        visible: false
    };
    render() {
    const Ola = this.setState.visible
        return (
            <Container>
                <Logo>
                    <h1>Grillo</h1>
                    <h3>CADASTRAR</h3>
                </Logo>
                <Content>
                    <Stage>
                        <h3>Olá</h3>

                        <h3>Local</h3>
                        <h3>Você</h3>
                        <h3>Entrar</h3>
                        <Link to="./main"className="Link">
                        <button>
                            <span>PRÓXIMO</span>
                            <img src={Icon} />
                        </button>
                        </Link>
                    </Stage>
                    <FormOla/>
                    <FormPlace />
                    <FormVoce />
                    <FormEntrar />
                </Content>
                <Space>
                </Space>
            </Container>
        );
    }
}


export default Register;


const FormOla = () => (
    <FormAll>
        <Photo>
            <img src={Cam} />
        </Photo>
        <Form>
            <input Placeholder="Nome artístico " />
            <h3>EU SOU UM(A)</h3>
        </Form>
        <Type>
            <div>
                <img src={IconMusico} />
                <span>Musico</span>
            </div>
            <div>
                <img src={IconBanda} />
                <span>Banda</span>
            </div>
            <div>
                <img src={IconPlace} />
                <span>Lugar</span>
            </div>
            <div>
                <img src={IconOrg} />
                <span>Eventos</span>
            </div>
            <div>
                <img src={IconFan} />
                <span>Fã!</span>
            </div>
        </Type>

    </FormAll>
);


const FormPlace = () => (
    <FormAll>
        <Image>
            <img src={Local} />
        </Image>
        <Form>
            <div>
                <label>Selecione o seu estado*</label>
                <select id="estado" name="estado">
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
    </FormAll>
);


const FormVoce = () => (
    <FormAll>
        <Image>
            <img src={Musica} />
        </Image>
        <Form>
            <div>
                <label>Qual instrumento você toca?*</label>
                <select id="estado" name="estado">
                    <option value="AC">Violão</option>
                    <option value="AL">Guitarra</option>
                    <option value="AP">Bateria</option>
                    <option value="AM">Flauta</option>
                    <option value="RR">Gaita</option>
                    <option value="SC">Pandeiro</option>
                    <option value="SP">Teclado</option>
                    <option value="SE">Triangulo</option>
                    <option value="TO">Violino</option>
                    <option value="EX">Ukulelê</option>
                </select>
            </div>
            <div>
                <input placeholder="Não encontrou? Digite aqui o nome do seu instrumento" />
            </div>
            <div>
                <label>Qual o seu estilo musical?*</label>
                <select id="estado" name="estado">
                    <option value="AC">Pop</option>
                    <option value="AL">Rag</option>
                    <option value="AP">Funk</option>
                    <option value="AM">Eletronica</option>
                    <option value="RR">Forró</option>
                    <option value="SC">Sertanejo</option>
                    <option value="SP">MPB</option>
                    <option value="SE">Góspel</option>
                    <option value="TO">Axé</option>
                    <option value="EX">Clássica</option>
                </select>
            </div>
            <div>
                <input placeholder="Outro" />
            </div>
        </Form>
    </FormAll>
);

const FormEntrar = () => (
    <FormAll>
        <Image>
            <img src={Entrar} />
        </Image>
        <Form>
            <label>Agora falta pouco!</label>
            <div>
                <input placeholder="Digite um login" />
                <input type="email" placeholder="Seu e-mail" />
                <input type="password" placeholder="CPF" />
                <input type="password" placeholder="Senha secreta" />
                <input type="password" placeholder="Confirmar senha" />
            </div>
        </Form>
        <Contract>
            <div>
                <Terms type="checkbox" id="termos" />
                <label for="termos">Ao prosseguir declaro que li, entendi, concordo e aceito os <u>Termos de Uso</u> e de <u>Serviço</u> do Grillo.</label>
            </div>
        </Contract>
    </FormAll>
);