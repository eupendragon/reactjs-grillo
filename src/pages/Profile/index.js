// Dependecies
import React, { Component } from 'react';
// Styles
import {
    Container,
    Content,
    YourInfo
} from './style';
// Components
import Menu from '../../components/Menu';
import MainHeader from '../../components/MainHeader';
export default class Profile extends Component {
    constructor(props){
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
        })
    }

    logout(){
        window.location.href = "/"
        localStorage.clear();
    }

    render() {
        const { image, nome, estado, instrumento, estilo, login, email } = this.state
        return (
            <Container>
                <Menu />
                <Content>
                    <MainHeader subTitle="SEU PERFIL" />
                    <YourInfo>
                        <img src={image} alt="" />
                        <div>
                            <h1>{nome}</h1>
                            <h2>{estado}</h2>
                            <h2>{instrumento}</h2>
                            <h2>{estilo}</h2>
                            <h2>{email}</h2>
                            <h2>{login}</h2>
                            <h2>{estilo}</h2>
                        </div>
                        <button onClick={this.logout}>SAIR</button>
                    </YourInfo>
                </Content>
            </Container>
        )
    }
}
