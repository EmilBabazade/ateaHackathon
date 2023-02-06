import { jsx as _jsx } from "react/jsx-runtime";
// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store
import React from 'react';
import Webix from '../../Webix';
import BarChart from '../GneralCharts/BarChart';
import BarChartWithSelection from '../GneralCharts/BarChartWithSelection';
const dataset = [
    {
        sales: 1105,
        year: 2019,
        _id: "01"
    },
    {
        sales: 844,
        year: 2020,
        _id: "11"
    },
    {
        sales: 1584,
        year: 2021,
        _id: "21"
    },
    {
        sales: 2320,
        year: 2022,
        _id: "31"
    },
    {
        sales: 903,
        year: 2023,
        _id: "41"
    }
];
const TotalNuberOfActiveAssetsBarChart = () => (_jsx(BarChartWithSelection, { title: "Total Number of Active Assets", dataset: dataset }));
export default TotalNuberOfActiveAssetsBarChart;
