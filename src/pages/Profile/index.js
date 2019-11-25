// Dependecies
import React, { Component } from 'react';
// Styles
import {
    Container,
    Content,
    YourInfo,
    TextInfo,
    Options
} from './style';
// Components
import Menu from '../../components/Menu';
import MainHeader from '../../components/MainHeader';
export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: null,
            nome: '',
            estado: '',
            instrumento: '',
            estilo: '',
            login: '',
            email: '',
            cpf: '',
            password: '',
        }
    }

    async componentDidMount() {
        const user = await JSON.parse(localStorage.getItem('@CacheGrillo:User'))
        this.setState({
            image: `http://localhost:3333/files/${user.image}`,
            nome: user.nome,
            estado: user.estado,
            instrumento: user.instrumento,
            estilo: user.estilo,
            login: user.login,
            email: user.email,
            descricao: user.descricao,
        })
    }

    async logout() {
        window.location.href = "/"
        await localStorage.clear()
    }

    render() {
        const { image, nome, estado, instrumento, estilo, descricao, email } = this.state
        return (
            <Container>
                <Menu />
                <Content>
                    <MainHeader subTitle={nome} />
                    <YourInfo>
                        <div style={{backgroundImage: "url(" + image + ")", width: '300px'}}></div>
                        <TextInfo>
                            <section>
                                <aside>
                                    <label htmlFor="">Estado</label>
                                    <input type="text" value={estado} />
                                </aside>
                                <aside>
                                    <label htmlFor="">E-mail</label>
                                    <input type="text" value={email} />
                                </aside>
                            </section>
                            <section>
                                <aside>
                                    <label htmlFor="">Estilo Musical</label>
                                    <input type="text" value={estilo} />
                                </aside>
                                <aside>
                                    <label htmlFor="">Instrumento</label>
                                    <input type="text" value={instrumento} />
                                </aside>
                            </section>
                            <label htmlFor="">Sobre você</label>
                            <textarea value={descricao}></textarea>
                        </TextInfo>
                    </YourInfo>
                        <Options>
                            <button onClick={this.logout}>SAIR</button>
                        </Options>
                </Content>
            </Container>
        )
    }
}
