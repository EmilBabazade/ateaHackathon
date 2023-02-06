// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from 'react';
import Webix from '../../Webix';
import BarChart, {barChartOption} from '../GneralCharts/BarChart';

export const totalNumberOfAssetsDataset = [
    {
        sales: 3000,
        year: 2019,
        _id: "01"
    },
    {
        sales: 5000,
        year: 2020,
        _id: "11"
    },
    {
        sales: 5600,
        year: 2021,
        _id: "21"
    },
    {
        sales: 7320,
        year: 2022,
        _id: "31"
    },
    {
        sales: 2003,
        year: 2023,
        _id: "41"
    }
]


const TotalNumberOfAssetsBarChart = () => (
    <BarChart title={"Number of new Users"} dataset={totalNumberOfAssetsDataset} />
)
export default TotalNumberOfAssetsBarChart;
