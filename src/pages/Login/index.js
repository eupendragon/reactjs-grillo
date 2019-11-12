// Dependencies
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
// Images
import logoGrillo from '../../assets/images/grilloLogo.svg';
import welcomePharse from '../../assets/images/welcomePharse.svg';
// Styles
import { Container, Pharse, Enter, Form, Submit } from './style';

// services
import { sessionStart, registerUser } from '../../api/UserAPI'

class Login extends Component {

    state = {
        login: '',
        senha: ''
    };

    
    // https://blog.rocketseat.com.br/reactjs-autenticacao/


    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async e => {

        e.preventDefault();
        
        const {
            login,
            senha,
        } = this.state;

        const loginData = {
            login: login,
            password: senha
        }
        
        try {
            console.log(await sessionStart(loginData))
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <Container>
                <Pharse>
                    <img src={welcomePharse} />
                    <p>2019 Auxiware -
                        <span>Termos de uso</span>
                    </p>
                </Pharse>
                <Enter>
                    <div>
                        <img src={logoGrillo} />
                    </div>
                    <div>
                        <h1>Grillo</h1>
                        <h2> BY AUXIWARE </h2>
                    </div>
                    <Form onSubmit={this.handleSubmit}>
                        <input
                            placeholder="Login"
                            name="login"
                            onChange={this.handleInputChange}
                            value={this.state.login}
                        />
                        <input
                            placeholder="Senha"
                            name="senha"
                            type="password"
                            onChange={this.handleInputChange}
                            value={this.state.senha}
                        />

                        <Submit>ENTRAR</Submit>

                        <p>Ainda não tem um Grillo?
                            <Link to="./register" className="Link">
                                <span>Cadastre-se</span>
                            </Link>
                        </p>
                    </Form>
                </Enter>
            </Container>
        )
    }
}

export default Login;