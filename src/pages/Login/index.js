// Dependencies
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// Images
import logoGrillo from '../../assets/images/grilloLogo.svg';
import welcomePharse from '../../assets/images/welcomePharse.svg';
// Styles
import { Container, Pharse, Enter, Form } from './style';

class Login extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
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
                    <Form>
                        <input
                            placeholder="Login"
                            className="input"
                            type="email"
                            id="loginName"
                        />
                        <input
                            placeholder="Senha"
                            className="input"
                            type="password"
                        />
                        <Link to='./main'>
                            <button>ENTRAR</button>
                        </Link>
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