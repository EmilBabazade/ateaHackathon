// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from 'react';
import Webix from '../../Webix';
import PieChart from '../GneralCharts/PieChart';

var dataset = [
    { sales: "2000", year: "2016", color: "#ee3639" },
    { sales: "3023", year: "2017", color: "#ee9e36" },
    { sales: "5043", year: "2018", color: "#eeea36" },
    { sales: "4034", year: "2019", color: "#a9ee36" },
    { sales: "7054", year: "2020", color: "#36d3ee" },
    { sales: "8034", year: "2021", color: "#367fee" },
    { sales: "6023", year: "2022", color: "#9b36ee" }
];

const TotalNumberOfAssetsPieChart = () => (
    <div>
        <PieChart title={"Total Number Of Assets"} dataset={dataset} />
    </div>
)
export default TotalNumberOfAssetsPieChart;
