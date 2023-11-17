/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";


export default class ListaCliente extends Component {
    render() {
        return (
            <div className="collection">
                <a className="collection-item">Cliente 1</a>
                <a className="collection-item active">Cliente 2</a>
                <a className="collection-item">Cliente 3</a>
                <a className="collection-item">Cliente 4</a>
            </div>
        )
    }
}