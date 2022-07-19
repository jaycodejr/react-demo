import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./redux";
import { Provider } from 'react-redux';

const store = createStore(rootReducer,applyMiddleware(thunk))

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}><App /></Provider>
  // </React.StrictMode>
);
