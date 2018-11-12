import React, { Component } from 'react';
import './Presentes.css';
import Menu from '../Components/Menu';

class Presentes extends Component {
    render() {
        return (
            <div>
                <Menu selected={3}/>
                <div className="page-container">
                    <div className="horizontal-section presentes-section">
                        Em breve...
                    </div>
                </div>
            </div>
        );
    }
}

export default Presentes;