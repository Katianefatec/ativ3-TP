import { Component } from "react";
import { Route, RouteProps, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Login";
import ListaClientesSJC from "./unidadeSJC/componentes/listaClienteSJC";
import ListaProdutoSJC from "./unidadeSJC/componentes/listaProdutoSJC";
import ListaServicoSJC from "./unidadeSJC/componentes/listaServicoSJC";
import MenuSJC from "./unidadeSJC/componentes/MenuSJC";
import ListaProdutoTaubate from "./unidadeTaubate/listaProdutoTaubate";
import ListaClientesTaubate from "./unidadeTaubate/listaClienteTaubate";
import ListaServicoTaubate from "./unidadeTaubate/listaServicoTaubate";
import MenuTaubate from "./unidadeTaubate/MenuTaubate";

type state = {
    tela: string
}

interface PrivateRouteProps extends RouteProps {
    tela: string;
    menu: React.ComponentType; 
}

class PrivateRoute extends Route<PrivateRouteProps> {
    render() {
        const MenuComponent = this.props.menu;
        return (
            <>
                <MenuComponent />
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
                    <PrivateRoute path="/produtoSJC" tela={this.state.tela} menu={MenuSJC}>
                        <ListaProdutoSJC />
                    </PrivateRoute>
                    <PrivateRoute path="/clienteSJC" tela={this.state.tela} menu={MenuSJC}>
                        <ListaClientesSJC />
                    </PrivateRoute>
                    <PrivateRoute path="/servicoSJC" tela={this.state.tela} menu={MenuSJC}>
                        <ListaServicoSJC />
                    </PrivateRoute>
                    
                    <PrivateRoute path="/produtoTaubate" tela={this.state.tela} menu={MenuTaubate}>
                        <ListaProdutoTaubate />
                    </PrivateRoute>
                    <PrivateRoute path="/clienteTaubate" tela={this.state.tela} menu={MenuTaubate}>
                        <ListaClientesTaubate />
                    </PrivateRoute>
                    <PrivateRoute path="/servicoTaubate" tela={this.state.tela} menu={MenuTaubate}>
                        <ListaServicoTaubate />
                    </PrivateRoute>
                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        ); 
    }
}
