// Dependencies
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
// Images
import logoGrillo from '../../assets/images/grilloLogo.svg';
import welcomePharse from '../../assets/images/welcomePharse.svg';
// Styles
import { Container, Pharse, Enter, Form, Submit } from './style';

// services
import { api } from '../../api/APIUtils'

class Login extends Component {

    state = {
        login: '',
        password: '',
        loggedInUser: null,
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = async e => {
        e.preventDefault();
        try {
            const {
                login,
                password,
            } = this.state;

            const response = await api.post('/auth', {
                login: login,
                password: password,
            })

            this.setState({loggedInUser: login})

            const { user, token } = response.data
            localStorage.setItem('@CacheGrillo:Token', token)
            localStorage.setItem('@CacheGrillo:User', JSON.stringify(user))

            window.location.href  = "/main"

        } catch (err) {
            alert('Dados Inválidos!')
            console.log("Erro na requisição: " + err)
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
                            required
                        />
                        <input
                            placeholder="Senha"
                            name="password"
                            type="password"
                            onChange={this.handleInputChange}
                            value={this.state.password}
                            required
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