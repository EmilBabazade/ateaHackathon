// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from 'react';
import Webix from '../../Webix';
import PieChart from '../GneralCharts/PieChart';

var dataset = [
    { sales: "56.3", year: "Assets without Serial Number", color: "#C70039" },
    { sales: "43.7", year: "Assets with Serial Number", color: "#36BB40" },
];

const TotalNumberOfAssetsWithoutSerialNumberPieChart = () => (
    <div>
        <PieChart title={"Assets Without Serial Number"} dataset={dataset} />
    </div>
)
export default TotalNumberOfAssetsWithoutSerialNumberPieChart;
