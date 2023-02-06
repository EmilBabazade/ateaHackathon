import React from "react";
import {Box, Card, CardContent, makeStyles, Typography} from "@material-ui/core";
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
    const {children} = props;

    const filter = params;
    console.log("params", params)

    const classes = makeStyles((theme) => ({
        dashboard: {
            borderRadius: 5,
            borderWidth: 1,
            borderStyle: "solid",
            width: "100%",
            height: "100%",
        }
    }));

    return (
        <Box className={"dashboard-section"}>
            <Typography variant={"h4"} color={"secondary"}>
                {"Overview"}
            </Typography>
            <Box p={2} className={`dashboard-container`}>

                <Box display={"flex"} flexWrap={"wrap"} alignItems={"flex-start"} justifyContent={"flex-start"}>
                    <Card className={"chart-area"}>
                        <CardContent>
                            <TotalNumberOfAssetsBarChart/>
                        </CardContent>
                    </Card>
                    <Card className={"chart-area"}>
                        <CardContent>
                            <TotalNumberOfAssetsLineChart/>
                        </CardContent>
                    </Card>
                    <Card className={"chart-area"}>
                        <CardContent>
                            <TotalNumberOfAssetsPieChart/>
                        </CardContent>
                    </Card>
                    <Card className={"chart-area"}>
                        <CardContent>
                            <TotalNumberOfAssetsWithoutSerialNumberPieChart/>
                        </CardContent>
                    </Card>
                    <Card className={"chart-area"}>
                        <CardContent>
                            <TotalNuberOfActiveAssetsBarChart/>
                        </CardContent>
                    </Card>
                    {/*<Card className={"chart-area"}>
                        <CardContent>
                            <TotalNumberOfAssetsBarChart/>
                        </CardContent>
                    </Card>
                    <Card className={"chart-area"}>
                        <CardContent>
                            <TotalNumberOfAssetsLineChart/>
                        </CardContent>
                    </Card>
                    <Card className={"chart-area"}>
                        <CardContent>
                            <TotalNumberOfAssetsPieChart/>
                        </CardContent>
                    </Card>
                >
                */}
                </Box>
            </Box>
        </Box>
    )
}