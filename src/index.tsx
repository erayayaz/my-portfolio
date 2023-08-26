import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './components/portfolio';
import {Provider} from "react-redux";
import {initStore} from "./redux/initStore";

const store = initStore();

const root = ReactDOM.createRoot (
    document.getElementById('root') as HTMLElement
)

root.render(
    <Provider store={store}>
        <Portfolio />
    </Provider>,
);