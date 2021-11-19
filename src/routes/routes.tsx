import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PageLogin } from '../pages/login/login';

export function Routes() {
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={PageLogin} />
                </Switch>
            </BrowserRouter>
        </>
    );
}