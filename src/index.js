import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import NotFound from './components/notfound/notfound';
import Header from './components/common/header/header';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './index.scss';
import Home from './components/home/home';
import configureStore from './components/store/configStore';

const rootElement = document.getElementById('root')
const store = configureStore();

const routing = (
    <Router>
        <Provider store={store}>
            <div className="container">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Provider>
    </Router>
);

ReactDOM.render(routing, rootElement);
serviceWorker.unregister();
