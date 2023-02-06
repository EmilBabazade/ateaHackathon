// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from 'react';
import Webix from '../../Webix';

function chart(title, dataset) {
    return {
        rows: [
            {
                view: "template",
                template: title,
                type: "header",
            },
            {
                view: "select",
                label: "X-axis",
                value: 1,
                options: [
                    { "id": 1, "value": "Year" },
                    { "id": 2, "value": "Month" },
                    { "id": 3, "value": "Day" }
                ]
            },
            {
                height: 300,
                width: 800,
                view: "chart",
                type: "pie",
                value: "#sales#",
                color: "#color#",
                label: "#year#",
                pieInnerText: "#sales#",
                shadow: 5,
                data: dataset
            }
        ]
    };
}

const PieChart = ({ title, dataset }) => (
    <div>
        <Webix ui={chart(title, dataset)} />
    </div>
)
export default PieChart;
