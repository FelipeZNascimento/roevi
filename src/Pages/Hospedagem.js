import React, { Component } from 'react';
import './Hospedagem.css';
import Menu from '../Components/Menu';
import garcas from'../img/garcas.jpg';
import cave from'../img/cave.jpg';
import vilas from'../img/vilas.jpg';

class Hospedagem extends Component {
    render() {
        return (
            <div>
                <Menu selected={2}/>
                <div className="page-container">
                    <div className="bed">
                        <h1 className="center-align">Hospedagem</h1>
                        <div className="pousada">
                            <h2>Pousada Enseada das Garças</h2>
                            <img src={garcas} alt="Enseada das Garças"/>
                            <p>
                                Os noivos estarão hospedados aqui!
                                Caso queiram nos fazer companhia, a pousada oferece Day Use no valor de R$ 40.
                            </p>
                            <br />
                            <br />
                            <p>Endereço: Rua José Costa, 1088 - São Pedro da Aldeia, RJ - 28940-000</p>
                            <p>Distância: 3,3km (9min de carro)</p>
                            <p>Contato: +55 22 98819-5645 (Claudia - Desconto especial para convidados Ro e Vi)</p>
                            <p><a href="http://www.enseadadasgarcas.com.br">Website</a></p>
                            
                        </div>
                        <div className="pousada">
                            <h2>Pousada Cave do Sol</h2>
                            <img src={cave} alt="Cave do Sul"/>
                            <p>Endereço: Rua José Costa, 1087 - São Pedro da Aldeia, RJ - 28940-000</p>
                            <p>Distância: 3,3km (9min de carro)</p>
                            <p>Contato: +55 22 2627-2616</p>
                            <p><a href="https://www.pousadacavedosol.com.br">Website</a></p>
                        </div>
                        <div className="pousada">
                            <h2>Pousada Villa Mares</h2>
                            <img src={vilas} alt="Vilas Mares"/>
                            <p>Endereço: Rua Luiz de Camões, 1 - São Pedro da Aldeia, RJ - 28940-000</p>
                            <p>Distância: 1,3km (5min de carro)</p>
                            <p>Contato: +55 22 2621-7412</p>
                            <p><a href="http://villamares.com.br">Website</a></p>
                        </div>

                    </div>                    
                </div>
            </div>
        );
    }
}

export default Hospedagem;