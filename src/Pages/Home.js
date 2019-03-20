import React, { Component } from 'react';
import './Home.css';
import Menu from '../Components/Menu';

class Home extends Component {
    render() {
        return (
            <div>
                <Menu selected={0}/>
                <div className="page-container">                    
                </div>
            </div>
        );
    }
}

export default Home;
