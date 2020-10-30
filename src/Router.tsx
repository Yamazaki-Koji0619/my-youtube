import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './component/MainPage';
import ChannelPage from './component/ChannelPage';

const Router = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={MainPage} />
            <Route exact path={"/channel"} component={ChannelPage} />
        </Switch>
    );
};

export default Router;