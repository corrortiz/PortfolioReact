import React, {Component} from 'react';
import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from "react-router";
import {useTransitions, withTransition} from 'react-router-transitions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';

import About from './Vistas/About';
import Layout from './Vistas/Layout';
import PortFolio from './Vistas/PortFolio';
import Services from './Vistas/Services';
import Contact from './Vistas/Contact';

class App extends Component {

    render() {
        return (
            <Router
                history={browserHistory}
                render={applyRouterMiddleware(useTransitions({
                    TransitionGroup: ReactCSSTransitionGroup,
                    defaultTransition: {
                        transitionName: 'example',
                        transitionEnterTimeout: 500,
                        transitionLeaveTimeout: 300
                    }
                }))}
            >
                <Route path="/" component={withTransition(Layout)}>
                    <IndexRoute component={About}> </IndexRoute>
                    <Route path="services" name="services" component={Services}> </Route>
                    <Route path="portfolio" name="portfolio" component={PortFolio}> </Route>
                    <Route path="contact" name="contact" component={Contact}> </Route>
                </Route>
            </Router>
        );
    }
}

export default App;
