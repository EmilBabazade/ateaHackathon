// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from 'react';
import Webix from '../../Webix';
import BarChart from '../GneralCharts/BarChart';

const dataset = [
    {
        sales: 3000,
        year: 2007,
        _id: "01"
    },
    {
        sales: 5000,
        year: 2008,
        _id: "11"
    },
    {
        sales: 5400,
        year: 2009,
        _id: "21"
    },
    {
        sales: 3320,
        year: 2010,
        _id: "31"
    },
    {
        sales: 5003,
        year: 2011,
        _id: "41"
    }
]

const TotalNumberOfAssetsBarChart = () => (
    <BarChart title={"Total Number Of Assets"} dataset={dataset} />
)
export default TotalNumberOfAssetsBarChart;
