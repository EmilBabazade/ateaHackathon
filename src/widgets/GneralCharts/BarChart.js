// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from 'react';
import Webix from '../../Webix';

export function barChartOption(title, dataset) {
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
                view: "select",
                label: "Add",
                value: 1,
                options: [
                    { "id": 1, "value": "------" },
                    { "id": 2, "value": "Status Inactive" },
                    { "id": 3, "value": "Stolen" },
                    { "id": 4, "value": "Status Active" }
                ]
            },
            {
                view: "chart",
                width: 900,
                height: 250,
                type: "bar",
                barWidth: 60,
                radius: 2,
                gradient: "rising",
                xAxis: {
                    template: "#year#"
                },
                yAxis: {
                    start: 0,
                    step: 500,
                    end: 6000
                },
                series: [
                    {
                        value: "#sales#",
                        color: "#58dccd",
                        tooltip: {
                            template: "#sales#"
                        }
                    }
                ],
                data: dataset
            },
        ]
    };
}

const BarChart = ({ title, dataset }) => (
    <div>
        <Webix ui={barChartOption(title, dataset)} />
    </div>
)
export default BarChart;
