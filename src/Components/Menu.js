import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Menu.css';

var menuButtons = [
    {id:0, description: 'Home', link: 'home'},
    {id:1, description: 'Ro ♥ Vi', link: 'casal'},
    {id:2, description: 'Casamento', link: 'casamento'},
    {id:3, description: 'Presentes', link: 'presentes'},
    {id:4, description: 'Confirmação', link: 'confirmacao'},
];

class Button extends Component {
    render () {
        const renderButtons = menuButtons.map((button, id) => {
            return (
                <Link to={'/' + button.link} key={id}>
                    <div className={'menu-button ' + (this.props.selected === button.id ? 'selected' : '')}>
                        {button.description}
                    </div>
                </Link>
            )
        });
        return (
            <div>
                {renderButtons}
            </div>
        )
    }
}

class Menu extends Component {
    render() {
        return (
            <div className="menu-line">
                <div className="menu">
                    <Button text={'home'} selected={this.props.selected}/>
                </div>
            </div>
        );
    }
}

export default Menu;
