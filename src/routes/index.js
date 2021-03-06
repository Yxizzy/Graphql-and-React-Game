import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Template from '../containers/Template.js';
import Home from '../containers/Home';
import Profile from '../containers/Profile';

const createRoutes = () => {
    return (
        <div>
        <Route path='/' component={Template}>
        <IndexRoute component={Home} />
        <Route path={'/profile'} component={Profile} />
        </Route>
        </div>
    )
}

const Routes = createRoutes ()

export default Routes;