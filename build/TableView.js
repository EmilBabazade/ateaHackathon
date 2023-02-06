import { jsx as _jsx } from "react/jsx-runtime";
// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store
import React from 'react';
import Webix from './Webix';
function getUI(select) {
    return {
        view: "datatable", scroll: false, width: 400, autoheight: true, select: true, columns: [
            { id: "name", fillspace: 1 },
            { id: "email", fillspace: 1 },
            { id: "age", width: 50 }
        ],
        on: {
            onAfterSelect: function (id) {
                select(id);
            }
        }
    };
}
const TableView = ({ data, select }) => (_jsx(Webix, { ui: getUI(select), data: data }));
export default TableView;
