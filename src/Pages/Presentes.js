import React, { Component } from 'react';
import './Presentes.css';
import Menu from '../Components/Menu';

class Presentes extends Component {
    render() {
        return (
            <div>
                <Menu selected={3}/>
                <div className="page-container">
                    <a href="https://sites.icasei.com.br/robertaevictor/pt_br/store/9/1/1" target="_blank">
                        <div className="horizontal-section presentes-section">
                            Presentes
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Presentes;