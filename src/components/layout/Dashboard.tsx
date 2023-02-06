import React from "react";
import {Box, Card, CardActionArea, CardContent, Divider, SxProps, Theme, Typography} from "@mui/material";
import TotalNumberOfAssetsLineChart from "../../widgets/TotalNumberOfAssets/TotalNumberOfAssetsLineChart";
import TotalNumberOfAssetsBarChart from "../../widgets/TotalNumberOfAssets/TotalNumberOfAssetsBarChart";
import TotalNumberOfAssetsPieChart from "../../widgets/TotalNumberOfAssets/TotalNumberOfAssetsPieChart";
import TotalNumberOfAssetsWithoutSerialNumberPieChart from "../../widgets/TotalNumberOfAssets/TotalNumberOfAssetsWithoutSerialNumberPieChart";
import TotalNuberOfActiveAssetsBarChart from "../../widgets/TotalNumberOfAssets/TotalNuberOfActiveAssetsBarChart";
import {BoxSection, BoxSectionBody, BoxSectionHeader} from "../framework/boxSection/BoxSection";

const dashboardStyle: SxProps<Theme> = {
    borderRadius: 5,
    borderWidth: 1,
    width: "100%",
    height: "100%",

    ".chart-area": {
        margin: "5px",
        width: "500px",
        height: "450px",
        boxShadow: "none !important",
        border: "1px solid #e2e2e2",
    },
};

export function Dashboard(props: { children?: React.ReactNode }) {
    const {children} = props;


    return (
        <BoxSection className={"dashboard-section"}>
            <BoxSectionHeader>
                <Typography variant={"h4"} color={"secondary"}>
                    {"Dashboard"}
                </Typography>
            </BoxSectionHeader>
            <BoxSectionBody>
                <Box p={2} sx={dashboardStyle}>

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
            </BoxSectionBody>
        </BoxSection>
    );
}