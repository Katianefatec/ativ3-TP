import React, { Component } from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../estilos/styles.module.css';
import { Link } from 'react-router-dom';

type Servico = {
    nome: string;
    preco: number;
}

type State = {
    servicos: Servico[];
    servicoModal: Servico;
    showModal: boolean;
    filtroServico: string;
    
}

export default class ListaServicoTaubate extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            servicos: [],
            servicoModal: { nome: '', preco: 0 },
            showModal: false,
            filtroServico: '',
            
        };
    }

    componentDidMount() {
        let servicos: Servico[] = [
            { nome: "Corte de cabelo feminino", preco: 80 },
            { nome: "Corte de cabelo masculino", preco: 50 },
            { nome: "Tratamento para quedas de cabelo", preco: 40 },
            { nome: "Coloração", preco: 80 },
            { nome: "Hidratação", preco: 60 },
            { nome: "Manicure", preco: 30 },
            { nome: "Pedicure", preco: 40 },
            { nome: "Maquiagem", preco: 70 },
            { nome: "Depilação", preco: 50 },
            { nome: "Limpeza de pele", preco: 60 },
            { nome: "Massagem", preco: 100 },
            { nome: "Penteado", preco: 80 },
            { nome: "Design de sobrancelha", preco: 40 },
            { nome: "Modelagem e corte de barba", preco: 30 },
            { nome: "Aplicação de unhas de gel", preco: 80 },
            { nome: "Remoção de rugas", preco: 500 },
            { nome: "Remoção de manchas na pele", preco: 300 },
            { nome: "Aplicação de botox", preco: 200 },
            { nome: "Tratamento para emagrecimento e redução de medias", preco: 150 },
        ];

        servicos = servicos.sort((a, b) => a.nome.localeCompare(b.nome));

        this.setState({ servicos });
    }

    handleEditarClick = (servico: Servico) => {
        this.setState({ servicoModal: servico, showModal: true });
    };

    handleSalvarClick = () => {
        this.setState({ showModal: false });
    };

    handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(prevState => ({
            servicoModal: {
                ...prevState.servicoModal,
                nome: event.target.value || prevState.servicoModal.nome
            }
        }));
    };

    handlePrecoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(prevState => ({
            servicoModal: {
                ...prevState.servicoModal,
                preco: parseFloat(event.target.value) || prevState.servicoModal.preco
            }
        }));
    };

    handleCloseModal = () => {
        this.setState({ showModal: false });
    };

    handleExcluirClick = (servico: Servico) => {
        this.setState(state => ({
            servicos: state.servicos.filter(s => s !== servico)
        }));
    };
    
    handleFiltroServicoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ filtroServico: event.target.value });
    }

    render() {
        const { servicos, servicoModal, showModal, filtroServico } = this.state;
        const servicosFiltrados = servicos.filter(servico => servico.nome.toLowerCase().includes(filtroServico.toLowerCase()));
        return (
            <>
                <div className={styles['container-lista']}>
                    <div className={styles['wrap-lista']}>
                        <div className={styles['titulo-tabela']}>
                            <h1>Lista de Serviços</h1>
                        </div>
                        <div className={styles['titulo-tabela2']}>
                            
                            <input type="text" value={this.state.filtroServico} onChange={this.handleFiltroServicoChange} placeholder="Buscar por serviço" />
                            <Link to="/cadastroSJC">
                                <button>Cadastrar </button>
                            </Link>
                        </div> 
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Preço</th>
                                        <th>Alterar</th>
                                        <th>Excluir</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {servicosFiltrados.map((servico, index) => (
                                    <tr key={index}>
                                        <td>{servico.nome}</td>
                                        <td>{servico.preco}</td>
                                        <td><button onClick={() => this.handleEditarClick(servico)}>Editar</button></td>
                                        <td><button onClick={() => this.handleExcluirClick(servico)}>Excluir</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            
            <Modal show={showModal} onHide={this.handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Serviço</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="servicoNome">Nome</label>
                            <input type="text" className="form-control" id="servicoNome" value={servicoModal?.nome} onChange={this.handleNomeChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="servicoPreco">Preço</label>
                            <input type="number" className="form-control" id="servicoPreco" value={servicoModal?.preco} onChange={this.handlePrecoChange} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleCloseModal}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={this.handleSalvarClick}>
                        Salvar Alterações
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

    }
}