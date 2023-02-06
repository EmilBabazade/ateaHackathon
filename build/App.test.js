import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(_jsx(App, {}), div);
});
