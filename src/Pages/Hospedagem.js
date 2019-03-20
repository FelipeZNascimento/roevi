import React, { Component } from 'react';
import './Hospedagem.css';
import Menu from '../Components/Menu';

class Hospedagem extends Component {
    render() {
        return (
            <div>
                <Menu selected={2}/>
                <div className="page-container">
                    <div className="bed">
                        <h1 className="center-align">Hospedagem</h1>
                        <p>Em breve...</p>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Hospedagem;