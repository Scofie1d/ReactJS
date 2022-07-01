import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import logger from 'redux-logger';

const root = ReactDOM.createRoot(document.getElementById('root'));
const initialState = {
    count: 0
}

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                count: state.count + 1
            };
        case 'delete':
            return {...state,
            count: state.count - 1
            };

        default:
            return state
    }
}

const store = createStore(reduser, composeWithDevTools());
root.render(
 <Provider store={store}>
     <React.StrictMode>
         <App />
     </React.StrictMode>
 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

