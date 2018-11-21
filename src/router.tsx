import * as React from "react";
import {BrowserRouter, Route, StaticRouter, Switch} from "react-router-dom";
import {Routes} from "./routes";
import {App} from "./client/views/app";
import {Blog} from "./client/views/blog";
import {Contact} from "./client/views/contact";

const switcher = () =>
    <Switch>
        <Route exact path={Routes.home} render={context => <App/>}/>
        <Route exact path={Routes.blog} render={context => <Blog/>}/>
        <Route exact path={Routes.contact} render={context => <Contact/>}/>
    </Switch>;


export const router = (isServer?:boolean) =>
    isServer
        ? <StaticRouter>{switcher()}</StaticRouter>
        : <BrowserRouter>{switcher()}</BrowserRouter>;