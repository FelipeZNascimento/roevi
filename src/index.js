import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Casal from './Pages/Casal';
import Galeria from './Pages/Galeria';
import Historia from './Pages/Historia';
import Presentes from './Pages/Presentes';
import Casamento from './Pages/Casamento';
import Evento from './Pages/Evento';
import Hospedagem from './Pages/Hospedagem';
import Confirmacao from './Pages/Confirmacao';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/casal" exact={true} component={Casal} />
            <Route path="/casal/galeria" exact={true} component={Galeria} />
            <Route path="/casal/historia" exact={true} component={Historia} />
            <Route path="/presentes" exact={true} component={Presentes} />
            <Route path="/casamento" exact={true} component={Casamento} /> 
            <Route path="/casamento/evento" exact={true} component={Evento} /> 
            <Route path="/casamento/hospedagem" exact={true} component={Hospedagem} />
            <Route path="/confirmacao" exact={true} component={Confirmacao} /> 
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'))
;