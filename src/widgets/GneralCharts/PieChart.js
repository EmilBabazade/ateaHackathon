// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from 'react';
import Webix from '../../Webix';

export function pieChartOption(title, dataset) {
    return {
        rows: [
            {
                view: "template",
                template: title,
                type: "header",
            },
            {
                height: 300,
                width: 470,
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
        <Webix ui={pieChartOption(title, dataset)} />
    </div>
)
export default PieChart;
