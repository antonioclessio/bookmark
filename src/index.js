import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Estruturando o state
const stateStructure = {
    dataSource: [{
        id: 1,
        title: "Google",
        url: "http://www.google.com",
        tags: ["Search", "Web"]
    },
    {
        id: 2,
        title: "Facebook",
        url: "http://www.facebook.com",
        tags: ["Social", "Network", "Web"]
    },
    {
        id: 3,
        title: "Whiplash",
        url: "http://www.whiplash.net",
        tags: ["Música", "Guitarra"]
    }]
}

const dataSourceStructure = (state = stateStructure, action) => {
    switch(action.type) {
        case "ADD":
            state = { dataSource: [...state.dataSource, action.dataItem] };
            break;
        case "DEL":
            state = { ...state };
            state.dataSource = state.dataSource.filter((a) => a.id !== action.dataItem.id);
            break;
        case "DEL_TAG":
            let dataItem = state.dataSource.filter((a) => a.id === action.dataItem.id)[0];
            dataItem.tags = dataItem.tags.filter((tag) => tag !== action.tag);
            
            state.dataSource = state.dataSource.filter((a) => a.id !== dataItem.id);
            state = { dataSource: [...state.dataSource, action.dataItem] };
            break;
        default:
            break;
    }

    // Ordena a lista por ID
    state.dataSource = state.dataSource.sort(function (a, b) { return a.id - b.id; });

    return state;
}

const store = createStore(dataSourceStructure);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    
    document.getElementById('root'));
registerServiceWorker();
