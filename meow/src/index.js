import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

//Reducers
import { activity } from './store/reducers'

const rootReducer = combineReducers({
    activity
})

const theStore = createStore(rootReducer);

ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>, 
document.getElementById('root'));

serviceWorker.unregister();
