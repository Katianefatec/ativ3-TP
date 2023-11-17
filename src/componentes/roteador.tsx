import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import ListaCliente from "./listaCliente";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Login' 
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        return (
            <Router>
                <Switch>
                    {/* <Route path="/registracompra">
                        <RegistraCompra />
                    </Route> */}
                    {/* <Route path="/produtos">
                        <ListaProduto />
                    </Route> */}
                    <Route path="/clientes">
                        <ListaCliente />
                    </Route>
                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        ); 
    }
}
