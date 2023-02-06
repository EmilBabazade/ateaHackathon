import React from "react";
import {LoadingIndicator} from "../../../components/shared/LoadingIndicator";
import {NoResultsFound} from "../../../components/shared/utility/NoResultsFound";
import {Waypoint} from "react-waypoint";
import {DetailedListItem, FullHeightCell} from "./ListRow";
import {ExpandRow} from "../../../components/shared/ExpandRow";
import {useReplaceSearchParamsEffect, useSearchParams} from "../../../shared/useURLSearchParams";
import {DataObject, ExtendedItemListProps, Grouping} from "./ExdendedItemListProps";
import {ConditionalFragment} from "../../../shared/conditionalFragment";
import {BoxSectionHeader} from "../../boxSection/BoxSection";
import {Box, Checkbox, Collapse, Table, TableBody, TableCell, TableRow} from "@mui/material";


export interface DetailedItemListProps<T extends DataObject> extends ExtendedItemListProps <T> {
    listItemFactory?: (item: T) => React.ReactNode,
}

/**
 * Unlike ExtendedItemList, this list does not render an HTML table, but a more customisable
 * list of elements
 */
export function DetailedItemList<T extends DataObject>(props: DetailedItemListProps<T>) {
    const {
        data: items,
        color,
        columns,
        groupBy,
        defaultSortColumn = '',
        fetchMore,
        hasMore,
        isLoading = false,
        showNoResultsMessage = true,
        listItemFactory,
        actionRowFactory,
        extendedRowFactory,
        onRowDoubleClick,
        onClick,
        hasMultiSelect = false,
        onSelectedItemsChanged,
        notFoundChildren,
    } = props;

    const {sort: sortParam, search} = useSearchParams();

    const [sortColumn, setSortColumn] = React.useState<string>(sortParam ?? defaultSortColumn);
    const [selectedItems, setSelectedItems] = React.useState<Array<string | number>>([]);
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const [extendedRow, setExtendedRow] = React.useState<string | null>(null);

    // context menu options
    const isMenuOpen = (id: string | number): boolean => (openMenu !== null && openMenu === id);

    const toggleMenuOpen = (id: string) => {
        if (isMenuOpen(id)) {
            setOpenMenu(null);
        } else {
            setOpenMenu(id);
        }
    };

    // expand row
    const isRowExtended = (id: string | number | null): boolean => (extendedRow !== null && extendedRow === id);
    const toggleRowExtended = (id: string | null) => {
        if (isRowExtended(id)) {
            setExtendedRow(null);
        } else {
            setExtendedRow(id);
        }
    };

    // Make sure the URL keeps in sync with the sort.
    useReplaceSearchParamsEffect({sort: sortColumn});

    const handleMultiSelect = (id: string | number) => {
        const list = selectedItems.includes(id)
            ? selectedItems.filter(i => i !== id)
            : [...selectedItems, id];
        setSelectedItems(list);
        onSelectedItemsChanged && onSelectedItemsChanged(list);
    };

    // grouping
    const groupings = React.useMemo(() => {
        if (!groupBy || !items) return {};

        return items.reduce((prev, cur) => {
            const grouping = !cur ? "Other" : groupBy(cur);
            prev[grouping] = prev[grouping] || [];
            cur && prev[grouping].push(cur);
            return prev;
        }, {} as Grouping<T>);

    }, [groupBy, items]);

    const renderFragment = (item: T | null) => {
        if (item === null) return null;
        return (
            <React.Fragment key={item.id}>
                <DetailedListItem className={selectedItems.includes(item.id) ? "selected" : ""}
                                  onClick={() => onClick && onClick(item)}
                                  onDoubleClick={() => onRowDoubleClick && onRowDoubleClick(item)}
                                  expandable={!!extendedRowFactory}
                                  actionFactory={actionRowFactory}
                >
                    {/*render multi-selection button*/}
                    {hasMultiSelect && (
                        <Box className={"multi-select-cell"} sx={{position: "absolute", top: 10, left: 10, zIndex: 200}}>
                            <Checkbox
                                checked={selectedItems.includes(item.id)}
                                className={"multi-select-check"}
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                                onChange={(e) => {
                                    handleMultiSelect(item.id);
                                }}
                            />
                        </Box>
                    )}
                    {/*render item contents or use custom factory*/}
                    {listItemFactory ? (
                        listItemFactory(item)
                    ) : (
                        <Table>
                            <TableBody>
                                <TableRow>
                                    {columns && columns.map((colMap, index) => {
                                        // iterating columns
                                        return (
                                            <React.Fragment key={index}>
                                                <TableCell>
                                                    <h5>{colMap.columnName}</h5>
                                                    <div>{
                                                        colMap.value
                                                            ? colMap.value(item)
                                                            : colMap.dataField
                                                                ? (item as any)[colMap.dataField]
                                                                : ""
                                                    }</div>
                                                </TableCell>
                                            </React.Fragment>

                                        );
                                    })}
                                </TableRow>
                            </TableBody>
                        </Table>
                    )}
                </DetailedListItem>

                {/* render expand row content if given */}
                {extendedRow && extendedRowFactory && (
                    <Collapse component={"tr"} in={isRowExtended(item.id)} id={item.id.toString()}>
                        <TableCell sx={{p: 3}}
                                   className={"extended-table-container"}>
                            {extendedRowFactory(item)}
                        </TableCell>
                    </Collapse>
                )}

                {/* render action row content if given */}
                {actionRowFactory && (
                    <ExpandRow id={item.id} isOpen={isMenuOpen(item.id)}>
                        {actionRowFactory(item)}
                    </ExpandRow>
                )}
            </React.Fragment>
        );
    };


    return (
        <>
            <Box className={`extended-item-list detail-list ${color}`}>
                {
                    groupBy && groupings ? (
                        // rendering grouped items
                        Object.keys(groupings).map((groupingKey, index) => {
                            const groupItems = groupings[groupingKey];
                            if (!groupItems.length) return null;

                            return (
                                <React.Fragment key={index}>
                                    <BoxSectionHeader row padding={"xs"} transparent className={"grouping-header"}>
                                        <h3>{groupingKey}</h3>
                                    </BoxSectionHeader>
                                    {groupItems.map((item, _) => renderFragment(item))}
                                </React.Fragment>
                            );
                        })
                    ) : (
                        // rendering rows
                        items?.map((item, _) => renderFragment(item))
                    )

                }
                <ConditionalFragment showIf={!isLoading && !items?.length && showNoResultsMessage}>
                    <DetailedListItem>
                        <NoResultsFound search={search ?? ""}>
                            {notFoundChildren}
                        </NoResultsFound>
                    </DetailedListItem>
                </ConditionalFragment>
                {fetchMore && hasMore && (
                    <Box sx={{minHeight: "5px", width: "100%"}}>
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
            </Box>
        </>
    );
}