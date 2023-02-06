// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from 'react';
import Webix from '../../Webix';
import PieChart from '../GneralCharts/PieChart';

export const TotalNumberOfAssetsPieChartDataSet = [
    { sales: "78.2", year: "Assets without Warranty", color: "#ee3639" },
    { sales: "21.8", year: "Assets with Warranty", color: "#ee9e36" },
];

const TotalNumberOfAssetsPieChart = () => (
    <div>
        <PieChart title={"Assets % with Warranty"} dataset={TotalNumberOfAssetsPieChartDataSet} />
    </div>
)
export default TotalNumberOfAssetsPieChart;
