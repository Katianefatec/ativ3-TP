import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../estilos/menu.css";
import sair from "../assets/sair.png";
import wbimg from '../assets/logo.png';

class MenuSJC extends Component {
  render() {
    return (
      <>
        <div className="MenuSup">
          <div id="MenuSupItem">          
          </div>
          <div className="item-menu-sup">
            <h5>Unidade SJC</h5>
            <Nav.Link as={Link} to="/">
              <img src={sair} alt="Sair" className="logout-icon" />
            </Nav.Link>
          </div>
        </div>
        <div className="sidebar-fixed">
          <div className="container-fluid">
            <div className="row">
              <nav id="sidebar">
                <div className="sidebar-header">
                  <img src={wbimg} alt="logo"/> 
                </div>
                <div className="list-unstyled components">
                  <Nav.Link as={Link} to="/cadastro"> Cadastro </Nav.Link> 
                  <Nav.Link as={Link} to="/clientes">Clientes </Nav.Link>
                  <Nav.Link as={Link} to="/produtos"> Produtos </Nav.Link>
                  <Nav.Link as={Link} to="/servicos"> Serviços </Nav.Link>
                  <Nav.Link as={Link} to="/relatorios"> Relatórios </Nav.Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MenuSJC;


