import React from "react";
import {DataObject} from "./ExdendedItemListProps";
import classNames from "classnames";
import {Box, BoxProps, darken, lighten, SxProps, TableRow, TableRowProps, Theme} from "@mui/material";
import {BoxSection, BoxSectionBody, BoxSectionProps} from "../../boxSection/BoxSection";

export interface ExpandRowPropsBase {
    onLongPress?: (e: React.TouchEvent) => void,
    children?: React.ReactNode
}


export interface ExpandRowProps extends ExpandRowPropsBase, TableRowProps {
}

export interface DetailedListItemProps<T extends DataObject> extends ExpandRowPropsBase, BoxSectionProps {
    expandable?: boolean,
    onDoubleClick?: (e: React.MouseEvent) => void,
    onClick?: (e: React.MouseEvent) => void,
    actionFactory?: (item: T) => React.ReactNode,
    item?: T,
}

export interface DetailedListItemElementProps {
    children?: React.ReactNode,
    className?: string
}

export const FullHeightCell = (props: DetailedListItemElementProps) => {
    const {children, className} = props;
    const c = classNames("full-height-cell", className);
    return (
        <div className={c}>
            {children}
        </div>
    );
};

export const ItemActionContainer = (props: DetailedListItemElementProps) => {
    const {children, className} = props;
    const c = classNames("item-action-container", className);
    return (
        <div className={c}>
            {children}
        </div>
    );
};

/**
 * List item element
 */
export function DetailedListItem<T extends DataObject>(props: DetailedListItemProps<T>) {
    const {children, className, onLongPress, onDoubleClick, expandable, actionFactory, sx, ...rest} = props;


    const detailListItemStyle: SxProps<Theme> = {

        cursor: "pointer",
        transition: (theme: Theme) => (
            theme.transitions.create('background-color', {
                easing: theme.transitions.easing.easeIn,
                duration: theme.transitions.duration.enteringScreen,
            })
        ),
        "&:hover": {
            backgroundColor: (theme: Theme) => lighten(theme.palette.background.default, 0.5),
            transition: (theme: Theme) => (
                theme.transitions.create('background-color', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.leavingScreen,
                })
            ),
        },

        ...sx
    };

    return (
        <BoxSection className={`list-item ${className}`} sx={detailListItemStyle} {...rest}>
            {children}
        </BoxSection>
    );

}

export function DetailedListItemContents(props: {children: React.ReactNode}) {
    return (
        <BoxSectionBody className={`list-item-contents`}>
            {props.children}
        </BoxSectionBody>
    );
}

/**
 * Table row which can handle actions on long press
 */
export function ListRow(props: ExpandRowProps) {
    const {children, className, onLongPress, onClick, onDoubleClick, ...rest} = props;
    const ref = React.useRef<HTMLTableRowElement | null>(null);
    // const handlers = useLongPress({onLongPress: onLongPress, onClick: onClick, onDoubleClick: onDoubleClick, ref: ref})

    const defaultStyle: SxProps<Theme> = {
        background: "#fff",
        color: "#5C6873FF",
        borderBottom: `1px solid #AEB3C2FF`,
    };

    // const {style} = useSpotlightBackgroundEffect({
    //     ref: ref,
    //     backgroundColor: "#fff",
    //     effectBackgroundColor: "#f3f3f3",
    //     effectStrength: 0.6,
    //     effectRadius: 150,
    // })

    return (
        <TableRow hover className={`list-row ${className}`} {...rest}
                  onClick={(e) => onClick && onClick(e)}
                  ref={ref}
                  sx={{...defaultStyle}}>
            {children}
        </TableRow>
    );
}
