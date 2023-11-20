import React, { Component } from 'react';
import { Table, Modal } from 'react-bootstrap';
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
    filtro: string; // Novo estado para o filtro
}

export default class RelatoriosTaubate extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            clientes: [],
            modalShow: false,
            clienteModal: null,
            filtro: '' 
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

    // componentDidMount() {
    //     // Substitua 'http://localhost:3000/clientes' pela URL do seu servidor
    //     fetch('http://localhost:3000/clientes')
    //         .then(response => response.json())
    //         .then(clientes => this.setState({ clientes }));
    // }

    render() {
        const { clientes, modalShow, clienteModal, filtro } = this.state;

        const clientesFiltrados = clientes.filter(cliente =>
            cliente.nome.toLowerCase().includes(filtro.toLowerCase()) ||
            cliente.cpf.includes(filtro)
        );
        return (
            <div className={styles['container-lista']}> Relatorios </div>
        );
    }
}