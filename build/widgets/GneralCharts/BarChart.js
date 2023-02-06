import { jsx as _jsx } from "react/jsx-runtime";
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
                label: "Year",
                value: 1,
                options: [
                    { "id": 1, "value": "Year" },
                    { "id": 2, "value": "Month" },
                    { "id": 3, "value": "Day" }
                ]
            },
            {
                view: "chart",
                height: 300,
                width: 470,
                type: "bar",
                barWidth: 60,
                radius: 2,
                gradient: "rising",
                xAxis: {
                    template: "#year#"
                },
                yAxis: {
                    start: 0,
                    step: 1000,
                    end: 8000
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
const BarChart = ({ title, dataset }) => (_jsx("div", { children: _jsx(Webix, { ui: barChartOption(title, dataset) }) }));
export default BarChart;
