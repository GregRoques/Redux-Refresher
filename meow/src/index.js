import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

//Reducers
import {activity} from './store/Reducers/activityReducers';
import theCats from './store/Reducers/catsReducers';

const rootReducer = combineReducers({
    activity: activity
})

const store = createStore(rootReducer);

window.store = store


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));

serviceWorker.unregister();
