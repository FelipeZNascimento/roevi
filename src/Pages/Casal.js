import React, { Component } from 'react';
import './Casal.css';
import Menu from '../Components/Menu';
import { Link } from 'react-router-dom'

class Casal extends Component {
    render() {
        return (
            <div>
                <Menu selected={1}/>
                <div className="page-container">
                    <Link to={'/casal/historia'}>
                        <div className="horizontal-section historia-section">
                            História
                        </div>
                    </Link>
                    <Link to={'/casal/galeria'}>
                        <div className="horizontal-section galeria-section">
                            Galeria
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Casal;