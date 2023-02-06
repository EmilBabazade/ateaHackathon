import * as React from 'react';
import classNames from "classnames";
import {LoadingIndicator} from "../../components/shared/LoadingIndicator";
import {Container, ContainerProps, SxProps} from "@mui/material";

export interface MainContainerProps extends ContainerProps {
    fullWidthOnSm?: boolean,
    flex?: boolean,
    fluid?: boolean,
    fluidMaxWidth?: number,
}


export const MainContainer = (props: MainContainerProps) => {
    const {className, children, flex = false, fluid = false, fullWidthOnSm = false, fluidMaxWidth, ...rest} = props;

    const mainContainerClass = classNames(
        'main-container',
        className,
        {'fwsm': fullWidthOnSm},
    );

    const mainContainerStyle: SxProps = {
        paddingLeft: {xs: 0, sm: 4},
        paddingRight: {xs: 0, sm: 4},
        ...fluidMaxWidth ? {maxWidth: fluidMaxWidth} : {},
        ...flex ? {display: "flex", justifyContent: "center"} : {},
    };

    return (
        <Container maxWidth={fluid ? false : "lg"}
                   className={mainContainerClass}
                   {...rest}
                   sx={mainContainerStyle}>
            <React.Suspense fallback={<LoadingIndicator/>}>
                {props.children}
            </React.Suspense>
        </Container>
    );
};

export const ViewContainer = (props: MainContainerProps) => {
    const {className, children, fullWidthOnSm = false, ...rest} = props;

    const mainContainerClass = classNames(
        'main-container view-container',
        className,
        {'fwsm': fullWidthOnSm},
    );

    return (
        <Container className={mainContainerClass} sx={{paddingLeft: 4, paddingRight: 4}} {...rest}>
            <React.Suspense fallback={<LoadingIndicator/>}>
                {props.children}
            </React.Suspense>
        </Container>
    );
};
