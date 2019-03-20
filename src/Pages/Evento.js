import React, { Component } from 'react';
import './Evento.css';
import Menu from '../Components/Menu';
import garcas from'../img/garcas.jpg';
import cave from'../img/cave.jpg';

class Evento extends Component {
    render() {
        let iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.680235946545!2d-42.10805568456594!3d-22.851316985040143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x970fdbd0cd540f%3A0x1a9e8d778c92356a!2sMonica+%26+Marinho+B+%26+B!5e0!3m2!1sen!2sbr!4v1548701754472" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';

        return (
            <div>
                <Menu selected={2}/>
                <div className="page-container">
                    <div className="event">
                        <h1 className="center-align">Evento</h1>
                        <p><strong>Quando</strong>: 21/09/2019, 16h</p>
                        <p><strong>Como</strong>: Esporte fino. Recomendamos roupas leves para o conforto de vocês devido ao calor.
                        </p>
                        <p><strong>Onde</strong>: Rua das Camélias, 350, Porto da Aldeia, São Pedro da Aldeia - RJ</p>
                        <div className="map" dangerouslySetInnerHTML={{__html: iframe }} />
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Evento;