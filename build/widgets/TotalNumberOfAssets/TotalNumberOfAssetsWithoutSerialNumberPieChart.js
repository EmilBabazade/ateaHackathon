import { jsx as _jsx } from "react/jsx-runtime";
// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store
import React from 'react';
import Webix from '../../Webix';
import PieChart from '../GneralCharts/PieChart';
var dataset = [
    { sales: "56.3", year: "Assets without Serial Number", color: "#C70039" },
    { sales: "43.7", year: "Assets with Serial Number", color: "#36BB40" },
];
const TotalNumberOfAssetsWithoutSerialNumberPieChart = () => (_jsx("div", { children: _jsx(PieChart, { title: "Assets Without Serial Number", dataset: dataset }) }));
export default TotalNumberOfAssetsWithoutSerialNumberPieChart;
