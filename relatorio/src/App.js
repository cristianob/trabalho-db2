import React from 'react';
import './App.css';
import * as RB from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <RB.Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <RB.Container>
          <RB.Navbar.Brand href=".">Início</RB.Navbar.Brand>
          <RB.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <RB.Navbar.Collapse id="basic-navbar-nav">
            <RB.Nav className="me-auto">
              <RB.Nav.Link href="https://github.com/cristianob/trabalho-db2" target="_blank">GitHub</RB.Nav.Link>
            </RB.Nav>
          </RB.Navbar.Collapse>
        </RB.Container>
      </RB.Navbar>

      <header className="App-header">
        <div className="App-search">

          <div classname="seleção">
            <label for="Seleção">Escolha o tipo de pesquisa: </label>
            <RB.ButtonGroup size="lg" aria-label="Seleção">
              <RB.Button variant="secondary" value = "select-aerodromo">Aeródromo</RB.Button>
              <RB.Button variant="secondary" value = "select-metar">Metar</RB.Button>
              <RB.Button variant="secondary" value = "select-taf">Taf</RB.Button>
              <RB.Button variant="secondary" value = "select-tsc">Tsc</RB.Button>
            </RB.ButtonGroup>
          </div>

          <div classname="select-aerodromo">
            <RB.Form>
              <RB.Form.Group classname="Ordenar-aero" controlId="Ordenar-aero">
                <label for="select-aero">Ordenar por</label>
                <select id="select-aero">
                  <option value="aero-cres">Crescente</option>
                  <option value="aero-decr">Decrescente</option>
                </select>
              </RB.Form.Group>
              <RB.Button variant = "primary" type = "submit">Procurar</RB.Button>
            </RB.Form>
          </div>

          <div classname="select-metar">
            <RB.Form>
              <RB.Form.Group classname="Ordenar-metar" controlId="Ordenar-metar">
                <label for="select-metar">Ordenar por</label>
                <select id="select-metar">
                  <option value="cod-met">Código</option>
                  <option value="novo">Data mais recente</option>
                  <option value="antigo">Data mais antiga</option>
                </select>
              </RB.Form.Group>
              <RB.Button variant = "primary" type = "submit">Procurar</RB.Button>
            </RB.Form>
          </div>

          <div classname="select-taf">
            <RB.Form>
              <RB.Form.Group classname="Ordenar-taf" controlId="Ordenar-taf">
                <label for="select-taf">Ordenar por</label>
                <select id="select-taf">
                  <option value="cod-taf">Código</option>
                  <option value="novo-taf">Data mais recente</option>
                  <option value="antigo-taf">Data mais antiga</option>
                </select>
              </RB.Form.Group>
              <RB.Button variant = "primary" type = "submit">Procurar</RB.Button>
            </RB.Form>
          </div>

          <div classname="select-tsc">
            <RB.Form>
              <RB.Form.Group classname="Ordenar-tsc" controlId="Ordenar-tsc">
                <label for="select-tsc">Ordenar tipo por</label>
                <select id="select-tsc">
                  <option value="tsc-cres">Crescente</option>
                  <option value="tsc-descres">Decrescente</option>
                </select>
              </RB.Form.Group>
              <RB.Button variant = "primary" type = "submit">Procurar</RB.Button>
            </RB.Form>
          </div>
        </div>

      </header>

    </div>
  );
}
export default App;