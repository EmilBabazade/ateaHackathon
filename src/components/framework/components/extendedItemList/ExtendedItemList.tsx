import React from "react";
import {LoadingIndicator} from "../../../components/shared/LoadingIndicator";
import {NoResultsFound} from "../../../components/shared/utility/NoResultsFound";
import {Waypoint} from "react-waypoint";
import {ListRow} from "./ListRow";
import {TableRowButtons} from "./TableRowButtons";
import {useSearchParams} from "../../../shared/useURLSearchParams";
import {DataObject, ExtendedItemListProps} from "./ExdendedItemListProps";
import {ExpandRow} from "../../../components/shared/ExpandRow";
import {ConditionalFragment} from "../../../shared/conditionalFragment";
import {
    Box,
    Checkbox,
    Collapse, SxProps,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Theme,
    ToggleButton,
    useMediaQuery
} from "@mui/material";
import {ArrowDownward, ArrowUpward} from "@mui/icons-material";


/**
 * Abstracted list which has the ability to add a collapsable row for each item
 */
export function ExtendedItemList<T extends DataObject>(props: ExtendedItemListProps<T>) {
    const {
        data: items,
        color,
        columns,
        defaultSortColumn = '',
        fetchMore,
        hasMore,
        refresh,
        isLoading = false,
        showNoResultsMessage = true,
        actionRowFactory,
        extendedRowFactory,
        onRowDoubleClick,
        onClick,
        hasMultiSelect = false,
        isActionRowHiddenCallback,
        onSelectedItemsChanged,
    } = props;

    const {search} = useSearchParams();

    const [selectedItems, setSelectedItems] = React.useState<Array<string | number>>([]);
    const [openMenu, setOpenMenu] = React.useState<string | number | null>(null);
    const [extendedRow, setExtendedRow] = React.useState<string | number | null>(null);

    const isXl = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));
    const isLg = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
    const isMd = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
    const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

    // return number of columns in a table, depending on table config and screen size
    const [totalColCount, dataColCount] = React.useMemo(() => {

        let dataCols = columns?.length ?? 0;
        if (isXl) {
        } else if (isLg) dataCols = dataCols > 6 ? 6 : dataCols;
        else if (isMd) dataCols = dataCols > 5 ? 5 : dataCols;
        else if (isSm) dataCols = dataCols > 4 ? 4 : dataCols;

        return [dataCols, dataCols + (actionRowFactory ? 1 : 0) + (hasMultiSelect ? 1 : 0)];

    }, [actionRowFactory, hasMultiSelect, columns, isSm, isMd, isLg, isXl]);

    // context menu options
    const isMenuOpen = (id: string | number): boolean => (openMenu !== null && openMenu === id);
    const toggleMenuOpen = (id: string | number) => {
        if (isMenuOpen(id)) {
            setOpenMenu(null);
        } else {
            setOpenMenu(id);
        }
    };

    // expand row
    const isRowExtended = (id: string | number | null): boolean => (extendedRow !== null && extendedRow === id);
    const toggleRowExtended = (id: string | number | null) => {
        if (isRowExtended(id)) {
            setExtendedRow(null);
        } else {
            setExtendedRow(id);
        }
    };

    const handleMultiSelect = (id: string | number) => {
        const list = selectedItems.includes(id) ?
            selectedItems.filter(i => i !== id) :
            [...selectedItems, id];
        setSelectedItems(list);
        onSelectedItemsChanged && onSelectedItemsChanged(list);
    };

    // style
    //
    const tableStyle: SxProps<Theme> = {
        ".list-row": {
            cursor: "pointer",
            "td:first-of-type": {
                fontWeight: 500,
            }
        }

    };

    return (
        <TableContainer>
            <Table className={`extended-item-list ${color}`} sx={tableStyle}>
                <TableHead>
                    <TableRow>
                        {
                            // if we are multi-selecting, create a toggle
                            hasMultiSelect && (
                                <th>&nbsp;</th>
                            )
                        }
                        {
                            // map data columns
                            columns && columns.slice(0, dataColCount).map((colMap, index) => (
                                <th key={index}>{colMap.columnName}</th>
                            ))
                        }
                        {
                            // if we have expandRow, add empty column to the end
                            actionRowFactory && (
                                <th>&nbsp;</th>
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        // iterating data items
                        items?.map((item, index) => {
                            if (item === null) return null;

                            return (
                                <React.Fragment key={index}>
                                    <ListRow className={selectedItems.includes(item.id) ? "selected" : ""}
                                             onDoubleClick={e => onRowDoubleClick && onRowDoubleClick(item)}
                                             onClick={e => onClick && onClick(item)}
                                    >
                                        {hasMultiSelect && (
                                            <TableCell className={"multi-select-cell"} sx={{width: "45px"}}>
                                                <Checkbox
                                                    checked={false}
                                                    className={"multi-select-check"}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        handleMultiSelect(item.id);
                                                    }}
                                                />
                                            </TableCell>
                                        )}
                                        {
                                            // iterating columns, with last columns in vertical layout on smaller screens
                                            columns && columns.slice(0, dataColCount).map((colMap, index) => {

                                                return (
                                                    <TableCell className={colMap.primary ? "primary" : ""}
                                                               key={index}>{colMap.value
                                                        ? colMap.value(item)
                                                        : colMap.dataField
                                                            ? (item as any)[colMap.dataField]
                                                            : ""}
                                                    </TableCell>
                                                );

                                            })
                                        }
                                        {/*render buttons if we were given extended row or action row functions*/}
                                        {(actionRowFactory || extendedRowFactory) && (
                                            <TableCell className={"context-actions"} style={{verticalAlign: "middle"}}>
                                                <TableRowButtons>
                                                    {(!isActionRowHiddenCallback || !isActionRowHiddenCallback(item)) && actionRowFactory && (
                                                        <ToggleButton
                                                            value={isMenuOpen(item.id)}
                                                            id={item.id.toString()}
                                                            className={`toggle-menu-button ${isMenuOpen(item.id) ? "toggled" : ""}`}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                toggleMenuOpen(item.id);
                                                            }}
                                                            onTouchEnd={(e) => {
                                                                e.preventDefault();
                                                                toggleMenuOpen(item.id);
                                                            }}
                                                        >
                                                            {isMenuOpen(item.id) ? <ArrowUpward/> : <ArrowDownward/>}
                                                        </ToggleButton>
                                                    )}
                                                    {extendedRowFactory && (
                                                        <ToggleButton
                                                            value={isRowExtended(item.id)}
                                                            id={item.id.toString()}
                                                            className={`toggle-menu-button ${isRowExtended(item.id) ? "toggled" : ""}`}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                toggleRowExtended(item.id);
                                                            }}
                                                            onTouchEnd={(e) => {
                                                                e.preventDefault();
                                                                toggleMenuOpen(item.id);
                                                            }}
                                                        >
                                                            {isRowExtended(item.id) ? <ArrowUpward/> : <ArrowDownward/>}
                                                        </ToggleButton>
                                                    )}
                                                </TableRowButtons>
                                            </TableCell>
                                        )}
                                    </ListRow>
                                    {/* render expand row content if given */}
                                    {extendedRow && extendedRowFactory && (
                                        <Collapse component={"tr"} in={isRowExtended(item.id)} id={item.id.toString()}>
                                            <TableCell colSpan={totalColCount}
                                                       sx={{p: 3}}
                                                       className={"extended-table-container"}>
                                                {extendedRowFactory(item)}
                                            </TableCell>
                                        </Collapse>
                                    )}
                                    {/* render action row content if given */}
                                    {actionRowFactory && (
                                        <ExpandRow id={item.id} isOpen={isMenuOpen(item.id)} colSpan={totalColCount}>
                                            {actionRowFactory(item)}
                                        </ExpandRow>
                                    )}
                                </React.Fragment>
                            );
                        })
                    }
                    <ConditionalFragment showIf={!isLoading && !items?.length && showNoResultsMessage}>
                        <TableRow>
                            <TableCell colSpan={totalColCount}>
                                <NoResultsFound search={search ?? ""}/>
                            </TableCell>
                        </TableRow>
                    </ConditionalFragment>
                    <TableRow sx={{borderBottom: "none"}}>
                        <TableCell colSpan={totalColCount} sx={{borderBottom: "none"}}>
                            {fetchMore && hasMore && (
                                <Box sx={{minHeight: "5px"}}>
                                    <ConditionalFragment showIf={!isLoading && !!items?.length && hasMore()}>
                                        <Waypoint key={items?.length ?? 0}
                                                  scrollableAncestor={window}
                                                  onEnter={() => fetchMore()}/>
                                    </ConditionalFragment>
                                    <ConditionalFragment showIf={isLoading}>
                                        <LoadingIndicator fullWidth/>
                                    </ConditionalFragment>
                                </Box>
                            )}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
