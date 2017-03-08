import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'materialize-css/dist/css/materialize.min.css';
import store from './store';
import App from './App';
import './index.css';

const AppMaterial = () => (
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
);

ReactDOM.render(
    <Provider store={store} >
        <AppMaterial/>
    </Provider>,
    document.getElementById('root')
);
