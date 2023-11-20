import React, { Component } from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../estilos/styles.module.css';
import { Link } from 'react-router-dom';


type Cliente = {
    nome: string;
    nomeSocial: string;
    cpf: string;
    rgs: string[];
    genero: string;
    dataCadastro: string;
    telefones: string[];
}

type State = {
    clientes: Cliente[];
    modalShow: boolean;
    clienteModal: Cliente | null;
    filtro: string; 
    modalConsumoShow: boolean;
    modalAlterarShow: boolean;
    modalExcluirShow: boolean;
    produtoSelecionado: string; 
    servicoSelecionado: string; 
}

export default class ListaClientesTaubate extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            clientes: [],
            modalShow: false,
            clienteModal: null,
            filtro: '' ,
            modalConsumoShow: false,
            modalAlterarShow: false,
            modalExcluirShow: false, 
            produtoSelecionado: '',
            servicoSelecionado: '',

        };
    }

    componentDidMount() {
        
        const clientesFicticios: Cliente[] = [
            {
                nome: 'João',
                nomeSocial: 'Jonh',
                cpf: '22222222222',
                rgs: ['222222222'],
                genero: 'Masculino',
                dataCadastro: new Date().toISOString(),
                telefones: ['(11) 111111111']
            },
                        
            {
                nome: 'Fabio',
                nomeSocial: 'Fab',
                cpf: '34343434343',
                rgs: ['343434343'],
                genero: 'Masculino',
                dataCadastro: new Date().toISOString(),
                telefones: ['(31) 313131313']
            },

            {
                nome: 'Ana',
                nomeSocial: 'Ana',
                cpf: '44444444444',
                rgs: ['444444444'],
                genero: 'Feminino',
                dataCadastro: new Date().toISOString(),
                telefones: ['(44) 444444444']
            },

            {
                nome: 'Joaquim',
                nomeSocial: 'Joaq',
                cpf: '55555555555',
                rgs: ['555555555'],
                genero: 'Masculino',
                dataCadastro: new Date().toISOString(),
                telefones: ['(55) 555555555']
            },

            {
                nome: 'Pedro',
                nomeSocial: 'Ped',
                cpf: '66666666666',
                rgs: ['666666666'],
                genero: 'Masculino',
                dataCadastro: new Date().toISOString(),
                telefones: ['(66) 666666666']
            },
            
            {
                nome: 'Maria',
                nomeSocial: 'Mary',
                cpf: '33333333333',
                rgs: ['333333333'],
                genero: 'Feminino',
                dataCadastro: new Date().toISOString(),
                telefones: ['(22) 222222222']
            },
            
                    

            
        ];
    
        this.setState({ clientes: clientesFicticios });
    }

    handleRowClick = (cliente: Cliente) => {
        this.setState({
            modalShow: true,
            clienteModal: cliente
        });
    }

    handleFiltroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ filtro: event.target.value });
    }

    handleConsumoClick = (cliente: Cliente) => {
        this.setState({ 
            clienteModal: cliente,
            modalConsumoShow: true,
        });
    };
    
    handleAlterarClick = (cliente: Cliente) => {
        this.setState({
            modalAlterarShow: true,
            clienteModal: cliente
        });
    }

    handleExcluirClick = (cliente: Cliente) => {
        this.setState({
            modalExcluirShow: true,
            clienteModal: cliente
        });
    } 

    handleProdutoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ produtoSelecionado: event.target.value });
    };
    
    handleServicoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ servicoSelecionado: event.target.value });
    };

    handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (this.state.clienteModal) {
            this.setState({ clienteModal: { ...this.state.clienteModal, nome: event.target.value } });
        }
    };
    
    handleNomeSocialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (this.state.clienteModal) {
            this.setState({ clienteModal: { ...this.state.clienteModal, nomeSocial: event.target.value } });
        }
    };
    
    handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (this.state.clienteModal) {
            this.setState({ clienteModal: { ...this.state.clienteModal, cpf: event.target.value } });
        }
    };
    
    handleRgsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (this.state.clienteModal) {
            const rgs = event.target.value.split(', ').map(rg => rg.trim());
            this.setState({ clienteModal: { ...this.state.clienteModal, rgs: rgs } });
        }
    };
    
    handleGeneroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (this.state.clienteModal) {
            this.setState({ clienteModal: { ...this.state.clienteModal, genero: event.target.value } });
        }
    };
    
    handleTelefonesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (this.state.clienteModal) {
            const telefones = event.target.value.split(', ').map(telefone => telefone.trim());
            this.setState({ clienteModal: { ...this.state.clienteModal, telefones: telefones } });
        }
    };

    adicionarConsumo = () => {
        
        console.log("Adicionar consumo");
        this.setState({ modalConsumoShow: false });
    }
    
    alterarCliente = () => {
        
        console.log("Alterar cliente");
        this.setState({ modalAlterarShow: false });
    }
    
    excluirCliente = () => {
        
        console.log("Excluir cliente");
        this.setState({ modalExcluirShow: false });
    }

    // componentDidMount() {
    //     // Substitua 'http://localhost:3000/clientes' pela URL do seu servidor
    //     fetch('http://localhost:3000/clientes')
    //         .then(response => response.json())
    //         .then(clientes => this.setState({ clientes }));
    // }

    render() {
        const { modalShow, modalExcluirShow, modalConsumoShow, modalAlterarShow } = this.state;

        const clientesFiltrados = this.state.clientes.filter(cliente =>
            cliente.nome.toLowerCase().includes(this.state.filtro.toLowerCase()) ||
            cliente.cpf.includes(this.state.filtro)
        );
        return (
          <>
                <div className={styles['container-lista']}>
                    <div className={styles['wrap-lista']}>
                        <div className={styles['titulo-tabela']}>
                            <h1>Lista de Clientes</h1>
                        </div>
                    <div className={styles['titulo-tabela2']}>
                    <input type="text" value={this.state.filtro} onChange={this.handleFiltroChange} placeholder="Buscar por nome ou CPF" />
                        <Link to="/cadastroSJC">
                            <button>Cadastrar </button>
                        </Link>
                    </div>                     
                    <div className={styles['table-responsive']}>
                    <Table striped hover>
                    <thead>
                      <tr>
                        <th colSpan={2}>Nome</th>
                        <th colSpan={2}>Telefone</th>
                        <th colSpan={1}>Detalhes</th>
                        <th colSpan={1}>Consumo</th>                        
                        <th colSpan={1}>Alterar</th>
                        <th colSpan={1}>Excluir</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                    {clientesFiltrados.map((cliente: Cliente, index: number) => ( 
                        <tr key={index}>
                            <td colSpan={2}>{cliente.nome}</td>
                            <td colSpan={2}>{cliente.telefones.join(', ')}</td>
                            <td colSpan={1}><button onClick={() => this.handleRowClick(cliente)}>Detalhes</button></td>
                            <td colSpan={1}><button onClick={() => this.handleConsumoClick(cliente)}>Adicionar</button></td>
                            <td colSpan={1}><button onClick={() => this.handleAlterarClick(cliente)}>Editar</button></td>
                            <td colSpan={1}><button onClick={() => this.handleExcluirClick(cliente)}>Excluir</button></td>
                            
                        </tr>
                    ))}
                    </tbody>
                  </Table>
                </div>
              </div>
              <div>
                <Modal show={modalShow} onHide={() => this.setState({ modalShow: false })}>
                    <Modal.Header closeButton>
                    <Modal.Title>{this.state.clienteModal?.nome}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Modal.Title>{this.state.clienteModal?.nome}</Modal.Title>
                        <p>Nome Social: {this.state.clienteModal?.nomeSocial}</p>
                        <p>CPF: {this.state.clienteModal?.cpf}</p>
                        <p>RGs: {this.state.clienteModal?.rgs.join(', ')}</p>
                        <p>Gênero: {this.state.clienteModal?.genero}</p>
                        <p>Data de Cadastro: {this.state.clienteModal?.dataCadastro ? new Date(this.state.clienteModal.dataCadastro).toLocaleDateString('pt-BR') : ''}</p>
                        <p>Telefones: {this.state.clienteModal?.telefones.join(', ')}</p>
                    </Modal.Body>
                </Modal>
                <Modal show={this.state.modalConsumoShow} onHide={() => this.setState({ modalConsumoShow: false })}>
                    <Modal.Header closeButton>
                        <Modal.Title>Adicionar Consumo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <label>
                                Produto:
                                <select value={this.state.produtoSelecionado} onChange={this.handleProdutoChange}>
                                    <option value="">Selecione um produto</option>
                                    <option value="produto1">Produto 1</option>
                                    <option value="produto2">Produto 2</option>
                                    <option value="produto3">Produto 3</option>
                                    {/* Adicione mais opções conforme necessário */}
                                </select>
                            </label>
                            <br />
                            <br />
                            <label>
                                Serviço:
                                <select value={this.state.servicoSelecionado} onChange={this.handleServicoChange}>
                                    <option value="">Selecione um serviço</option>
                                    <option value="servico1">Serviço 1</option>
                                    <option value="servico2">Serviço 2</option>
                                    <option value="servico3">Serviço 3</option>
                                    {/* Adicione mais opções conforme necessário */}
                                </select>
                            </label>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ modalConsumoShow: false })}>
                            Fechar
                        </Button>
                        <Button variant="primary" onClick={this.adicionarConsumo}>
                            Salvar
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.modalAlterarShow} onHide={() => this.setState({ modalAlterarShow: false })}>
                    <Modal.Header closeButton>
                        <Modal.Title>Alterar Cliente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <label>
                                Nome:
                                <input type="text" value={this.state.clienteModal?.nome} onChange={this.handleNomeChange} />
                            </label>
                            <br />
                            <label>
                                Nome Social:
                                <input type="text" value={this.state.clienteModal?.nomeSocial} onChange={this.handleNomeSocialChange} />
                            </label>
                            <br />
                            <label>
                                CPF:
                                <input type="text" value={this.state.clienteModal?.cpf} onChange={this.handleCPFChange} />
                            </label>
                            <br />
                            <label>
                                RGs:
                                <input type="text" value={this.state.clienteModal?.rgs.join(', ')} onChange={this.handleRgsChange} />
                            </label>
                            <br />
                            <label>
                                Gênero:
                                <input type="text" value={this.state.clienteModal?.genero} onChange={this.handleGeneroChange} />
                            </label>
                            <br />
                            <label>
                                Telefones:
                                <input type="text" value={this.state.clienteModal?.telefones.join(', ')} onChange={this.handleTelefonesChange} />
                            </label>
                            <br />
                            {/* Adicione mais campos conforme necessário */}
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ modalAlterarShow: false })}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={this.alterarCliente}>Salvar</Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={modalExcluirShow} onHide={() => this.setState({ modalExcluirShow: false })}>
                    <Modal.Header closeButton>
                        <Modal.Title>Excluir Cliente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Conteúdo do modal para excluir cliente */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ modalExcluirShow: false })}>
                            Cancelar
                        </Button>
                        <Button variant="danger" onClick={this.excluirCliente}>Excluir</Button>
                    </Modal.Footer>
                </Modal>
                </div>
            </div>                
            </>
        );
    }
}