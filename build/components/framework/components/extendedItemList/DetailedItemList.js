import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { LoadingIndicator } from "../../../components/shared/LoadingIndicator";
import { NoResultsFound } from "../../../components/shared/utility/NoResultsFound";
import { Waypoint } from "react-waypoint";
import { DetailedListItem } from "./ListRow";
import { ExpandRow } from "../../../components/shared/ExpandRow";
import { useReplaceSearchParamsEffect, useSearchParams } from "../../../shared/useURLSearchParams";
import { ConditionalFragment } from "../../../shared/conditionalFragment";
import { BoxSectionHeader } from "../../boxSection/BoxSection";
import { Box, Checkbox, Collapse, Table, TableBody, TableCell, TableRow } from "@mui/material";
/**
 * Unlike ExtendedItemList, this list does not render an HTML table, but a more customisable
 * list of elements
 */
export function DetailedItemList(props) {
    var _a;
    const { data: items, color, columns, groupBy, defaultSortColumn = '', fetchMore, hasMore, isLoading = false, showNoResultsMessage = true, listItemFactory, actionRowFactory, extendedRowFactory, onRowDoubleClick, onClick, hasMultiSelect = false, onSelectedItemsChanged, notFoundChildren, } = props;
    const { sort: sortParam, search } = useSearchParams();
    const [sortColumn, setSortColumn] = React.useState(sortParam !== null && sortParam !== void 0 ? sortParam : defaultSortColumn);
    const [selectedItems, setSelectedItems] = React.useState([]);
    const [openMenu, setOpenMenu] = React.useState(null);
    const [extendedRow, setExtendedRow] = React.useState(null);
    // context menu options
    const isMenuOpen = (id) => (openMenu !== null && openMenu === id);
    const toggleMenuOpen = (id) => {
        if (isMenuOpen(id)) {
            setOpenMenu(null);
        }
        else {
            setOpenMenu(id);
        }
    };
    // expand row
    const isRowExtended = (id) => (extendedRow !== null && extendedRow === id);
    const toggleRowExtended = (id) => {
        if (isRowExtended(id)) {
            setExtendedRow(null);
        }
        else {
            setExtendedRow(id);
        }
    };
    // Make sure the URL keeps in sync with the sort.
    useReplaceSearchParamsEffect({ sort: sortColumn });
    const handleMultiSelect = (id) => {
        const list = selectedItems.includes(id)
            ? selectedItems.filter(i => i !== id)
            : [...selectedItems, id];
        setSelectedItems(list);
        onSelectedItemsChanged && onSelectedItemsChanged(list);
    };
    // grouping
    const groupings = React.useMemo(() => {
        if (!groupBy || !items)
            return {};
        return items.reduce((prev, cur) => {
            const grouping = !cur ? "Other" : groupBy(cur);
            prev[grouping] = prev[grouping] || [];
            cur && prev[grouping].push(cur);
            return prev;
        }, {});
    }, [groupBy, items]);
    const renderFragment = (item) => {
        if (item === null)
            return null;
        return (_jsxs(React.Fragment, { children: [_jsxs(DetailedListItem, Object.assign({ className: selectedItems.includes(item.id) ? "selected" : "", onClick: () => onClick && onClick(item), onDoubleClick: () => onRowDoubleClick && onRowDoubleClick(item), expandable: !!extendedRowFactory, actionFactory: actionRowFactory }, { children: [hasMultiSelect && (_jsx(Box, Object.assign({ className: "multi-select-cell", sx: { position: "absolute", top: 10, left: 10, zIndex: 200 } }, { children: _jsx(Checkbox, { checked: selectedItems.includes(item.id), className: "multi-select-check", onClick: (e) => {
                                    e.stopPropagation();
                                }, onChange: (e) => {
                                    handleMultiSelect(item.id);
                                } }) }))), listItemFactory ? (listItemFactory(item)) : (_jsx(Table, { children: _jsx(TableBody, { children: _jsx(TableRow, { children: columns && columns.map((colMap, index) => {
                                        // iterating columns
                                        return (_jsx(React.Fragment, { children: _jsxs(TableCell, { children: [_jsx("h5", { children: colMap.columnName }), _jsx("div", { children: colMap.value
                                                            ? colMap.value(item)
                                                            : colMap.dataField
                                                                ? item[colMap.dataField]
                                                                : "" })] }) }, index));
                                    }) }) }) }))] })), extendedRow && extendedRowFactory && (_jsx(Collapse, Object.assign({ component: "tr", in: isRowExtended(item.id), id: item.id.toString() }, { children: _jsx(TableCell, Object.assign({ sx: { p: 3 }, className: "extended-table-container" }, { children: extendedRowFactory(item) })) }))), actionRowFactory && (_jsx(ExpandRow, Object.assign({ id: item.id, isOpen: isMenuOpen(item.id) }, { children: actionRowFactory(item) })))] }, item.id));
    };
    return (_jsx(_Fragment, { children: _jsxs(Box, Object.assign({ className: `extended-item-list detail-list ${color}` }, { children: [groupBy && groupings ? (
                // rendering grouped items
                Object.keys(groupings).map((groupingKey, index) => {
                    const groupItems = groupings[groupingKey];
                    if (!groupItems.length)
                        return null;
                    return (_jsxs(React.Fragment, { children: [_jsx(BoxSectionHeader, Object.assign({ row: true, padding: "xs", transparent: true, className: "grouping-header" }, { children: _jsx("h3", { children: groupingKey }) })), groupItems.map((item, _) => renderFragment(item))] }, index));
                })) : (
                // rendering rows
                items === null || items === void 0 ? void 0 : items.map((item, _) => renderFragment(item))), _jsx(ConditionalFragment, Object.assign({ showIf: !isLoading && !(items === null || items === void 0 ? void 0 : items.length) && showNoResultsMessage }, { children: _jsx(DetailedListItem, { children: _jsx(NoResultsFound, Object.assign({ search: search !== null && search !== void 0 ? search : "" }, { children: notFoundChildren })) }) })), fetchMore && hasMore && (_jsxs(Box, Object.assign({ sx: { minHeight: "5px", width: "100%" } }, { children: [_jsx(ConditionalFragment, Object.assign({ showIf: !isLoading && !!(items === null || items === void 0 ? void 0 : items.length) && hasMore() }, { children: _jsx(Waypoint, { scrollableAncestor: window, onEnter: () => fetchMore() }, (_a = items === null || items === void 0 ? void 0 : items.length) !== null && _a !== void 0 ? _a : 0) })), _jsx(ConditionalFragment, Object.assign({ showIf: isLoading }, { children: _jsx(LoadingIndicator, { fullWidth: true }) }))] })))] })) }));
}
