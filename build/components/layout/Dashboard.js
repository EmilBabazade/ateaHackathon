import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Box, Card, CardContent, makeStyles, Typography } from "@mui/material";
import TotalNumberOfAssetsLineChart from "../../widgets/TotalNumberOfAssets/TotalNumberOfAssetsLineChart";
import TotalNumberOfAssetsBarChart from "../../widgets/TotalNumberOfAssets/TotalNumberOfAssetsBarChart";
import TotalNumberOfAssetsPieChart from "../../widgets/TotalNumberOfAssets/TotalNumberOfAssetsPieChart";
import BarChartWithSelection from "../../widgets/GneralCharts/BarChartWithSelection";
import TotalNumberOfAssetsWithoutSerialNumberPieChart from "../../widgets/TotalNumberOfAssets/TotalNumberOfAssetsWithoutSerialNumberPieChart";
import TotalNuberOfActiveAssetsBarChart from "../../widgets/TotalNumberOfAssets/TotalNuberOfActiveAssetsBarChart";
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
export function Dashboard(props) {
    const { children } = props;
    const filter = params;
    console.log("params", params);
    const classes = makeStyles((theme) => ({
        dashboard: {
            borderRadius: 5,
            borderWidth: 1,
            borderStyle: "solid",
            width: "100%",
            height: "100%",
        }
    }));
    return (_jsxs(Box, Object.assign({ className: "dashboard-section" }, { children: [_jsx(Typography, Object.assign({ variant: "h4", color: "secondary" }, { children: "Overview" })), _jsx(Box, Object.assign({ p: 2, className: `dashboard-container` }, { children: _jsxs(Box, Object.assign({ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "flex-start" }, { children: [_jsx(Card, Object.assign({ className: "chart-area" }, { children: _jsx(CardContent, { children: _jsx(TotalNumberOfAssetsBarChart, {}) }) })), _jsx(Card, Object.assign({ className: "chart-area" }, { children: _jsx(CardContent, { children: _jsx(TotalNumberOfAssetsLineChart, {}) }) })), _jsx(Card, Object.assign({ className: "chart-area" }, { children: _jsx(CardContent, { children: _jsx(TotalNumberOfAssetsPieChart, {}) }) })), _jsx(Card, Object.assign({ className: "chart-area" }, { children: _jsx(CardContent, { children: _jsx(TotalNumberOfAssetsWithoutSerialNumberPieChart, {}) }) })), _jsx(Card, Object.assign({ className: "chart-area" }, { children: _jsx(CardContent, { children: _jsx(TotalNuberOfActiveAssetsBarChart, {}) }) }))] })) }))] })));
}
