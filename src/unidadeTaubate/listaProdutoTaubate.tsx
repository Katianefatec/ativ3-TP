import React, { Component } from 'react';
import { Table, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../estilos/styles.module.css';


type Produto = {
    nome: string;
    preco: number;
}

type State = {
    produtos: Produto[];
    
}

export default class ListaProdutoTaubate extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            produtos: [],
            
        };
    }

    componentDidMount() {
        const produtos: Produto[] = [
        { nome: "Shampoo", preco: 100 },
        { nome: "Condicionador", preco: 110 },
        { nome: "Óleo secante", preco: 12 },
        { nome: "Esmalte", preco: 10 },
        { nome: "Máscara capilar", preco: 140 },
        { nome: "Máscara facial", preco: 150 },
        { nome: "Secador de cabelo", preco: 160 },
        { nome: "Algodão", preco: 10 },
        { nome: "Lixa", preco: 5 },
        { nome: "Alicate", preco: 20 },
        { nome: "Pente", preco: 15 },
        { nome: "Escova de cabelo", preco: 30 },
        { nome: "Creme de pentear", preco: 50 },
        { nome: "Gel", preco: 20 },
        { nome: "Pomada", preco: 25 },
        { nome: "Cera", preco: 30 },
        { nome: "Spray", preco: 40 },
        { nome: "Mousse", preco: 45 },
        { nome: "Gloss", preco: 30 },
        { nome: "Batom", preco: 50 },
        { nome: "Base", preco: 60 }
        ];

        this.setState({ produtos });
    }

    

    render() {
        const { produtos } = this.state;
        return (
          <>
            <div className={styles['container-lista']}>
              <div className={styles['wrap-lista']}>
                <div className={styles['titulo-tabela']}>
                  <h1>Lista de Produtos</h1>
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
                      {produtos.map((produto, index) => (
                        <tr key={index} >
                          <td>{produto.nome}</td>
                          <td>{produto.preco}</td>
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