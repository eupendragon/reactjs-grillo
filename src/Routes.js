import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Contacts from './pages/Contacts';
import Results from './pages/Results';
import Filters from './pages/Filters';
import Events from './pages/Eventos';
import Musics from './pages/Musics';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/main" component={Main}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/events" component={Events}/>
            <Route path="/musics" component={Musics}/>
            <Route path="/results" component={Results}/>
            <Route path="/filters" component={Filters}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;