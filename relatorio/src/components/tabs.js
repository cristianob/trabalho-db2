import React, { Component } from 'react';
import * as RB from "react-bootstrap";

export default class Show extends Component {
    constructor(props){
        super(props);

        this.state = {selected_tab : "none"};
    }

    show_tab(){
        console.log("a");
    }

    render() {
        return (
            <div className="select">
                <label>Escolha o tipo de pesquisa: </label>
                <RB.ButtonGroup size="lg" aria-label="Seleção" onChange = {(event) => this.setState({selected_tab:event.target.value})}>
                    <RB.Button variant="secondary" value="select-aerodromo">Aeródromo</RB.Button>
                    <RB.Button variant="secondary" value="select-metar">Metar</RB.Button>
                    <RB.Button variant="secondary" value="select-taf">Taf</RB.Button>
                    <RB.Button variant="secondary" value="select-tsc">Tsc</RB.Button>
                </RB.ButtonGroup>
            </div>
        );
    }
}