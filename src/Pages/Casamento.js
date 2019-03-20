import React, { Component } from 'react';
import './Casamento.css';
import Menu from '../Components/Menu';
import { Link } from 'react-router-dom'

class Casamento extends Component {
    render() {
        return (
            <div>
                <Menu selected={2}/>
                <div className="page-container">
                    <Link to={'/casamento/evento'}>
                        <div className="horizontal-section event-section">
                            Evento
                        </div>
                    </Link>
                    <Link to={'/casamento/hospedagem'}>
                        <div className="horizontal-section hotel-section">
                            Hospedagem
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Casamento;