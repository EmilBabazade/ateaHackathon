import * as React from 'react';
import {Container} from "@mui/material";

// export interface MainContainerProps extends ContainerProps {
//     fullWidthOnSm?: boolean,
//     flex?: boolean,
//     fluid?: boolean,
//     fluidMaxWidth?: number,
// }


export const MainContainer = (props) => {
    const {className, children, flex = false, fluid = false, fullWidthOnSm = false, fluidMaxWidth, ...rest} = props;


    const mainContainerStyle = {
        paddingLeft: {xs: 0, sm: 1},
        paddingRight: {xs: 0, sm: 1},
        ...fluidMaxWidth ? {maxWidth: fluidMaxWidth} : {},
        ...flex ? {display: "flex", justifyContent: "center"} : {},
    };

    return (
        <Container maxWidth={fluid ? false : "lg"}
                   className={"main-container"}
                   {...rest}
                   sx={mainContainerStyle}>
            {props.children}
        </Container>
    );
};

export const ViewContainer = (props) => {
    const {className, children, fullWidthOnSm = false, ...rest} = props;


    return (
        <Container className={"main-container view-container"} sx={{paddingLeft: 4, paddingRight: 4}} {...rest}>
            {props.children}
        </Container>
    );
};
