import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import configureStore from './store';import './index.css';
import App from './App';
import * as registerServiceWorker from './serviceWorker';

ReactDOM.render(
 <Provider store={configureStore()}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
 </Provider>,
 document.getElementById('root')
);
registerServiceWorker.unregister();