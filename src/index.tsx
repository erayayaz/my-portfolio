import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './components/portfolio';
import {Provider} from "react-redux";
import {initStore} from "./redux/initStore";

const store = initStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Portfolio />
        </Provider>,
    </React.StrictMode>,
    document.getElementById('root')
);