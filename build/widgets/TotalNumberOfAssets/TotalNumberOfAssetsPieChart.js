import { jsx as _jsx } from "react/jsx-runtime";
// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store
import React from 'react';
import Webix from '../../Webix';
import PieChart from '../GneralCharts/PieChart';
var dataset = [
    { sales: "78.2", year: "Assets without Warranty", color: "#ee3639" },
    { sales: "21.8", year: "Assets with Warranty", color: "#ee9e36" },
];
const TotalNumberOfAssetsPieChart = () => (_jsx("div", { children: _jsx(PieChart, { title: "Assets % with Warranty", dataset: dataset }) }));
export default TotalNumberOfAssetsPieChart;
