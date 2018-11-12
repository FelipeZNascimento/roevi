import React, { Component } from 'react';
import './Casamento.css';
import Menu from '../Components/Menu';

class Casamento extends Component {
    render() {
        return (
            <div>
                <Menu selected={2}/>
                <div className="page-container">
                    <div className="horizontal-section casamento-section">
                        Em breve...
                    </div>
                </div>
            </div>
        );
    }
}

export default Casamento;