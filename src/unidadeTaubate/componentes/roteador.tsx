import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, RouteProps, Redirect } from "react-router-dom";
import Login from "./Login";
import ListaClientes from "./listaCliente";
import MenuSJC from "./MenuSJC";

type state = {
    tela: string
}

interface PrivateRouteProps extends RouteProps {
    tela: string;
}

class PrivateRoute extends Route<PrivateRouteProps> {
    render() {
        return (
            <>
                <MenuSJC />
                {super.render()}
            </>
        );
    }
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Login' 
        }
        this.selecionarView = this.selecionarView.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    handleLogin(event: React.FormEvent) {
        event.preventDefault();
        // Aqui você pode alterar o estado para refletir que o login foi bem-sucedido
        this.setState({
            tela: 'Clientes'
        })
    }

    render() {
        return (
            <Router>
                <Switch>
                    {/* <PrivateRoute path="/registracompra" tela={this.state.tela}>
                        <RegistraCompra />
                    </PrivateRoute> */}
                    {/* <PrivateRoute path="/produtos" tela={this.state.tela}>
                        <ListaProduto />
                    </PrivateRoute> */}
                    <PrivateRoute path="/clientes" tela={this.state.tela}>
                        <ListaClientes />
                    </PrivateRoute>
                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        ); 
    }
}
