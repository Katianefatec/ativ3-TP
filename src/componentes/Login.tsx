import React, { Component, ChangeEvent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import wbimg from '../assets/logo.png';
import '../styles.css';

interface State {
    email: string;
    password: string;
    error?: string;
    tela?: string;
}

class Login extends Component<RouteComponentProps, State> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    setEmail = (email: string) => {
        this.setState({ email });
    }

    setPassword = (password: string) => {
        this.setState({ password });
    }

    handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setEmail(event.target.value);
    }

    handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setPassword(event.target.value);
    }

    handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        this.props.history.push('/clientes');
    }

    // handleLogin = async (event: React.FormEvent) => {
    //     event.preventDefault();
    //     const { email, password } = this.state;
    //     try {
    //         const isAuthenticated = await this.authenticate(email, password);
    //         if (isAuthenticated) {
    //             this.props.history.push('/clientes');
    //         } else {
    //             this.setState({ error: 'Falha na autenticação' });
    //         }
    //     } catch (error) {
    //         this.setState({ error: 'Ocorreu um erro durante a autenticação' });
    //     }
    // }

    // authenticate(email: string, password: string): Promise<boolean> {

    //     return Promise.resolve(email === 'usuario@exemplo.com' && password === 'senha');
    // }

    render() {
        return (
            <div className="container">
                <div className="container-login">
                    <div className="wrap-login">
                        <form className="login-form" onSubmit={this.handleLogin}>
                        <span className="login-form-title">
                                <img src={wbimg} alt="logo"/> 
                            </span>                                                         
                            <div className="wrap-input">
                                <input className={this.state.email !== "" ? 'has-val input' : 'input'} 
                                type="email" 
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                required/>
                                <span className="focus-input" data-placeholder="Email"></span>
                            </div>
                            <div className="wrap-input">
                                <input className={this.state.password !== "" ? 'has-val input' : 'input'} 
                                type="password" 
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                required/>
                                <span className="focus-input" data-placeholder="Password"></span>                                
                            </div>   
                            <div className="container-login-form-btn">
                                <button className="login-form-btn"type="submit">Entrar</button>
                            </div>
                            <div className="text-center">
                                <span className="txt1"> Não possui uma conta? </span>                  
                                <a className="txt2" href="#"> Criar conta </a> 
                            </div> 
                        </form>                         
                    </div>
                </div>
            </div>                
        );
    }
}

export default withRouter(Login);