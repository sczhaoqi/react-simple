import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {AppContainer} from 'react-hot-loader';

import store from './store'
import Router from './router';
import "antd/dist/antd.css";

const rootElement = document.getElementById('root')
ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Router/>
        </Provider>
    </AppContainer>,
    rootElement
);

if (module.hot) {
    module.hot.accept();
}