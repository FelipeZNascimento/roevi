import React, { Component } from 'react';
import './Confirmacao.css';
import Menu from '../Components/Menu';

class Confirmacao extends Component {
    render() {
        return (
            <div>
                <Menu selected={4}/>
                <div className="page-container">
                    <div className="horizontal-section confirmacao-section">
                        Em breve...
                    </div>
                </div>
            </div>
        );
    }
}

export default Confirmacao;