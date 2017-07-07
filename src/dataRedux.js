import { createStore } from 'redux';

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
    },
    {
        id: 4,
        title: "UOL",
        url: "http://www.uol.com.br",
        tags: ["Notícias", "Universo", "Online"]
    }]
}

export const dataSourceStructure = (state = stateStructure, action) => {
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
};

export const store = createStore(dataSourceStructure);