import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import * as dsRedux from './dataRedux';

ReactDOM.render(
    <Provider store={dsRedux.store}>
        <App />
    </Provider>, 
    
    document.getElementById('root'));
registerServiceWorker();
