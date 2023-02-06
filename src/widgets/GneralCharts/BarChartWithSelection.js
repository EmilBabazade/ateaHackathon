// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from 'react';
import Webix from '../../Webix';

export function barChartOptionWithSelection(title, dataset) {
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
                view: "select",
                label: "Status",
                value: 1,
                options: [
                    { "id": 1, "value": "Status Active" },
                    { "id": 2, "value": "Status Inactive" },
                    { "id": 3, "value": "Stolen" },
                    { "id": 4, "value": "Re-Sold" }
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
                    step: 500,
                    end: 2500
                },
                series: [
                    {
                        value: "#sales#",
                        color: "#367CBB",
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

const BarChartWithSelection = ({ title, dataset }) => (
    <div>
        <Webix ui={barChartOptionWithSelection(title, dataset)} />
    </div>
)
export default BarChartWithSelection;
