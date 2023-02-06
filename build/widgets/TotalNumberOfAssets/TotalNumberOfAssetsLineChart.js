import { jsx as _jsx } from "react/jsx-runtime";
// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store
import React from 'react';
import Webix from '../../Webix';
import LineChart from '../GneralCharts/LineChart';
const dataset = [
    {
        sales: "3000",
        year: "2007",
        _id: "01"
    },
    {
        sales: "5000",
        year: "2008",
        _id: "11"
    },
    {
        sales: "5400",
        year: "2009",
        _id: "21"
    },
    {
        sales: "3320",
        year: "2010",
        _id: "31"
    },
    {
        sales: "5003",
        year: "2011",
        _id: "41"
    }
];
const TotalNumberOfAssetsLineChart = () => (_jsx("div", { children: _jsx(LineChart, { title: "Total Number Of Assets", dataset: dataset }) }));
export default TotalNumberOfAssetsLineChart;
