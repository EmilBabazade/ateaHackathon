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
                view: "chart",
                type: "line",
                width: 600,
                height: 250,
                value: "#sales#",
                gradient: "falling",
                color: "#b9a8f9",
                radius: 0,
                alpha: 0.5,
                border: true,
                barWidth: 70,
                xAxis: {
                    template: "#year#"
                },
                yAxis: {
                    start: 0,
                    end: 8000,
                    step: 1000,
                    template: function (obj) {
                        return (obj % 20 ? "" : obj)
                    }
                },
                data: dataset
            }
        ]
    };
}

const LineChart = ({ title, dataset }) => (
    <div>
        <Webix ui={chart(title, dataset)} />
    </div>
)
export default LineChart;
