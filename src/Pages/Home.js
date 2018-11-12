import React, { Component } from 'react';
import './Home.css';
import Menu from '../Components/Menu';
import homeImage from '../img/home_image.jpg';
import homeImageMobile from '../img/home_image_mobile.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <Menu selected={0}/>
                <div className="home">                    
                    <img className="home-image desktop-only" src={homeImage} alt=""/>
                    <img className="defined-width home-image mobile-only" src={homeImageMobile} alt=""/>
                </div>
            </div>
        );
    }
}

export default Home;
