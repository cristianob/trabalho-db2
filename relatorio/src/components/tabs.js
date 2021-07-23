import React, { Component } from 'react';
import * as RB from "react-bootstrap";

export default class Show extends Component {
    constructor(props) {
        super(props);

        this.state = { selected_tab: "none" };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        let value = e.target.value;
        this.setState({ selected_tab: value });
        console.log(this.state.selected_tab);
    }

    render() {
        return (
            <div className="select">
                <label>Escolha o tipo de pesquisa: </label>
                <RB.ButtonGroup size="lg" aria-label="Seleção">
                    <RB.Button variant="secondary" value="select-aerodromo" onClick={e => this.handleInput(e, "value")} >Aeródromo</RB.Button>
                    <RB.Button variant="secondary" value="select-metar" onClick={e => this.handleInput(e, "value")}>Metar</RB.Button>
                    <RB.Button variant="secondary" value="select-taf" onClick={e => this.handleInput(e, "value")}>Taf</RB.Button>
                    <RB.Button variant="secondary" value="select-tsc" onClick={e => this.handleInput(e, "value")}>Tsc</RB.Button>
                </RB.ButtonGroup>
            </div>
        );
    }
}