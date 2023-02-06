import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store
import React from 'react';
export const Home = () => (_jsxs("div", { children: [_jsx("p", { children: "When you are working with a combination of React and Webix, there are 3 main coding techniques." }), _jsxs("ul", { children: [_jsx("li", { children: "Creating UI via a Webix widget" }), _jsx("li", { children: "Wrapping Webix UI in a custom component" }), _jsx("li", { children: "Using Redux with Webix" })] }), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx("p", { children: "The above listed variants will work fine, if you need to add a few Webix widgets to a React-based app." }), _jsxs("p", { children: ["If you are planning to create an app with plenty of Webix widgets, check ", _jsx("a", Object.assign({ href: 'https://webix.gitbooks.io/webix-jet/content/chapter1.html' }, { children: "Webix Jet" })), " first. "] })] }));
export default Home;
