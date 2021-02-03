import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Pain from '../pages/Pain';

const App = () =>  {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pain" component={Pain} />
                <Route component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;