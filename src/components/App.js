import React, { Component } from 'react';

/* Import routing components */
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

/* layout */
import MainLayout from './Layout/MainLayout';

/* pages */
import Home from './Pages/Home';
import ProductView from './Pages/ProductView';

/* styles */
import '../www/scss/main.scss';

export default class App extends Component {
    
    render() {
        
        const reduxHistory = this.props.history;
        
        return (
            <Router history={reduxHistory} >
                <Route path="/" component={MainLayout}>
                    <IndexRoute component={Home} />
                    <Route path="/product/:id" component={ProductView}/>
                </Route>
            </Router>
        )

    }

}