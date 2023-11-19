import React, { Component } from 'react';
import styles from '../estilos/styles.module.css';

type State = {
    nome: string;
    nomeSocial: string;
    cpf: string;
    rgs: string;
    genero: string;
    telefones: string;
}

export default class CadastroSJC extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            nome: '',
            nomeSocial: '',
            cpf: '',
            rgs: '',
            genero: '',
            telefones: ''
        };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        
        if (!this.state.nome || !this.state.cpf || !this.state.genero) {
            alert('Por favor, preencha todos os campos obrigatórios (nome, cpf, gênero).');
            return;
        }

        
        console.log(this.state);

        
        this.setState({
            nome: '',
            nomeSocial: '',
            cpf: '',
            rgs: '',
            genero: '',
            telefones: ''
        });
    }

    render() {
        return (
            <div className={styles['container-lista']}>
                <div className={styles['wrap-cadastro']}>
                    <div className={styles['titulo-cadastro']}>
                        <h1>Cadastro de Clientes</h1>
                    </div>
                    <form  onSubmit={this.handleSubmit}>
                        <div className={styles['form-group']}>
                            <label>Nome:</label>
                            <input type="text" className={styles['full-width']} name="nome" value={this.state.nome} onChange={this.handleInputChange} required />
                        </div>
                        <div className={styles['form-group']}>
                            <label>Nome Social:</label>
                            <input type="text" className={styles['full-width']} name="nomeSocial" value={this.state.nomeSocial} onChange={this.handleInputChange} />
                        </div>                        
                        <div className={styles['form-group'] + ' ' + styles['flex-container']}>
                            <div className={styles['half']}>
                                <label>CPF:</label>
                                <input type="text" name="cpf" value={this.state.cpf} onChange={this.handleInputChange} required />
                            </div>
                            <div className={styles['half']}>
                                <label>RG:</label>
                                <input type="text" name="rgs" value={this.state.rgs} onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className={styles['form-group'] + ' ' + styles['flex-container']}>
                            <div className={styles['half']}>
                                <label>Gênero:</label>
                                <input type="text" name="genero" value={this.state.genero} onChange={this.handleInputChange} required />
                            </div>
                            <div className={styles['half']}>
                                <label>Telefones:</label>
                                <input type="text" name="telefones" value={this.state.telefones} onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className={styles['form-group']}>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>

            
        );
    }
}