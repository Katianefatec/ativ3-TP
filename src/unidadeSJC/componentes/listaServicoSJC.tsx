import React, { Component } from 'react';
import { Table, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../estilos/styles.module.css';

type Servico = {
    nome: string;
    preco: number;
}

type State = {
    servicos: Servico[];
    
}

export default class ListaServicoSJC extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            servicos: [],
            
        };
    }

    componentDidMount() {
        const servicos: Servico[] = [
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

        this.setState({ servicos });
    }

    

    render() {
        const { servicos } = this.state;
        return (
            <>
                <div className={styles['container-lista']}>
                    <div className={styles['wrap-lista']}>
                        <div className={styles['titulo-tabela']}>
                            <h1>Lista de Serviços</h1>
                        </div>
                        <div className={styles['table-responsive']}>
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
                                    {servicos.map((servico, index) => (
                                        <tr key={index} >
                                            <td>{servico.nome}</td>
                                            <td>{servico.preco}</td>
                                            <td><button>Editar</button></td>
                                            <td><button>Excluir</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    
                </div>                
            </>
        );
    }
}