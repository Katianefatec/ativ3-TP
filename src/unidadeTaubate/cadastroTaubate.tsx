import React, { Component } from 'react';
import styles from '../estilos/styles.module.css';

type State = {
    nome: string;
    nomeSocial: string;
    cpf: string;
    rgs: string;
    genero: string;
    telefones: string;
    produto: string;
    valorProduto: number;
    servico: string;
    valorServico: number;
}

export default class CadastroTaubate extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            nome: '',
            nomeSocial: '',
            cpf: '',
            rgs: '',
            genero: '',
            telefones: '',
            produto: '',
            valorProduto: 0,
            servico: '',
            valorServico: 0
        };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.type === 'number' ? Number(target.value) : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        } as Pick<State, keyof State>);
    }

    handleSubmitCliente = (event: React.FormEvent) => {
        event.preventDefault();
    
        // Aqui você pode adicionar a lógica para validar e lidar com a submissão do formulário de cliente
    
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
    
    handleSubmitProduto = (event: React.FormEvent) => {
        event.preventDefault();
    
        // Aqui você pode adicionar a lógica para validar e lidar com a submissão do formulário de produto
    
        console.log(this.state);
    
        this.setState({
            produto: '',
            valorProduto: 0
        });
    }
    
    handleSubmitServico = (event: React.FormEvent) => {
        event.preventDefault();
    
        // Aqui você pode adicionar a lógica para validar e lidar com a submissão do formulário de serviço
    
        console.log(this.state);
    
        this.setState({
            servico: '',
            valorServico: 0
        });
    }

    render() {
        return (
            <>
            <div className={styles['container-lista']}>
                <div className={styles['wrap-cadastro']}>
                    <div className={styles['titulo-cadastro']}>
                        <h1>Cadastro de Clientes</h1>
                    </div>
                    <form  onSubmit={this.handleSubmitCliente}>
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
                            <input type="submit" value="Enviar" />
                        </div>
                    </form>
                </div>
             
            
            
                <div className={styles['wrap-cadastro2']}>
                    <div className={styles['titulo-cadastro']}>
                        <h1>Cadastro de Produtos </h1>
                    </div>
                    <form onSubmit={this.handleSubmitProduto}>
                        <div className={styles['form-group'] + ' ' + styles['flex-container']}>
                            <div className={styles['half']}>
                                <label>Produto:</label>
                                <input type="text" name="produto" value={this.state.produto} onChange={this.handleInputChange} required />
                            </div>
                            <div className={styles['half']}>
                                <label>Valor:</label>
                                <input type="number" name="valorProduto" value={this.state.valorProduto} onChange={this.handleInputChange} required />
                            </div>
                        </div>
                        <div className={styles['form-group']}>
                            <input type="submit" value="Enviar" />
                        </div>
                    </form>
                </div>
             

            
                <div className={styles['wrap-cadastro2']}>
                    <div className={styles['titulo-cadastro']}>
                        <h1>Cadastro de Serviços </h1>
                    </div>
                    <form onSubmit={this.handleSubmitServico}>
                        <div className={styles['form-group'] + ' ' + styles['flex-container']}>
                            <div className={styles['half']}>
                                <label>Serviço:</label>
                                <input type="text" name="servico" value={this.state.servico} onChange={this.handleInputChange} required />
                            </div>
                            <div className={styles['half']}>
                                <label>Valor:</label>
                                <input type="number" name="valorServico" value={this.state.valorServico} onChange={this.handleInputChange} required />
                            </div>
                        </div>
                        <div className={styles['form-group']}>
                            <input type="submit" value="Enviar" />
                        </div>
                    </form>
                </div>
            </div> 
        </>
                    
        );
    }
}