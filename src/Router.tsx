import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './component/MainPage';

const Router = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={MainPage} />
        </Switch>
    );
};

export default Router;