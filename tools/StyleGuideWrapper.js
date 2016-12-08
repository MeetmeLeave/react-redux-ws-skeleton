import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import rootReducer from '../src/rootReducer';

export default class StyleGuideWrapper extends Component {

    constructor(props) {
        super(props);

        this.store = createStore(
            rootReducer
        );
    }

    render() {
        return (
            <Provider store={this.store}>
                {this.props.children}
            </Provider>
        );
    }
}