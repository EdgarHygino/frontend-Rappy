import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanegesMap from './pages/OrphanegesMap';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Landing} ></Route>
                <Route path='/app' component={OrphanegesMap } ></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;