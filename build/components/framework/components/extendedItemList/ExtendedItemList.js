import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { LoadingIndicator } from "../../../components/shared/LoadingIndicator";
import { NoResultsFound } from "../../../components/shared/utility/NoResultsFound";
import { Waypoint } from "react-waypoint";
import { ListRow } from "./ListRow";
import { TableRowButtons } from "./TableRowButtons";
import { useSearchParams } from "../../../shared/useURLSearchParams";
import { ExpandRow } from "../../../components/shared/ExpandRow";
import { ConditionalFragment } from "../../../shared/conditionalFragment";
import { Box, Checkbox, Collapse, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ToggleButton, useMediaQuery } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
/**
 * Abstracted list which has the ability to add a collapsable row for each item
 */
export function ExtendedItemList(props) {
    var _a;
    const { data: items, color, columns, defaultSortColumn = '', fetchMore, hasMore, refresh, isLoading = false, showNoResultsMessage = true, actionRowFactory, extendedRowFactory, onRowDoubleClick, onClick, hasMultiSelect = false, isActionRowHiddenCallback, onSelectedItemsChanged, } = props;
    const { search } = useSearchParams();
    const [selectedItems, setSelectedItems] = React.useState([]);
    const [openMenu, setOpenMenu] = React.useState(null);
    const [extendedRow, setExtendedRow] = React.useState(null);
    const isXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));
    const isLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
    const isMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
    const isSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
    // return number of columns in a table, depending on table config and screen size
    const [totalColCount, dataColCount] = React.useMemo(() => {
        var _a;
        let dataCols = (_a = columns === null || columns === void 0 ? void 0 : columns.length) !== null && _a !== void 0 ? _a : 0;
        if (isXl) {
        }
        else if (isLg)
            dataCols = dataCols > 6 ? 6 : dataCols;
        else if (isMd)
            dataCols = dataCols > 5 ? 5 : dataCols;
        else if (isSm)
            dataCols = dataCols > 4 ? 4 : dataCols;
        return [dataCols, dataCols + (actionRowFactory ? 1 : 0) + (hasMultiSelect ? 1 : 0)];
    }, [actionRowFactory, hasMultiSelect, columns, isSm, isMd, isLg, isXl]);
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
    const handleMultiSelect = (id) => {
        const list = selectedItems.includes(id) ?
            selectedItems.filter(i => i !== id) :
            [...selectedItems, id];
        setSelectedItems(list);
        onSelectedItemsChanged && onSelectedItemsChanged(list);
    };
    // style
    //
    const tableStyle = {
        ".list-row": {
            cursor: "pointer",
            "td:first-of-type": {
                fontWeight: 500,
            }
        }
    };
    return (_jsx(TableContainer, { children: _jsxs(Table, Object.assign({ className: `extended-item-list ${color}`, sx: tableStyle }, { children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [
                            // if we are multi-selecting, create a toggle
                            hasMultiSelect && (_jsx("th", { children: "\u00A0" })), 
                            // map data columns
                            columns && columns.slice(0, dataColCount).map((colMap, index) => (_jsx("th", { children: colMap.columnName }, index))), 
                            // if we have expandRow, add empty column to the end
                            actionRowFactory && (_jsx("th", { children: "\u00A0" }))] }) }), _jsxs(TableBody, { children: [
                        // iterating data items
                        items === null || items === void 0 ? void 0 : items.map((item, index) => {
                            if (item === null)
                                return null;
                            return (_jsxs(React.Fragment, { children: [_jsxs(ListRow, Object.assign({ className: selectedItems.includes(item.id) ? "selected" : "", onDoubleClick: e => onRowDoubleClick && onRowDoubleClick(item), onClick: e => onClick && onClick(item) }, { children: [hasMultiSelect && (_jsx(TableCell, Object.assign({ className: "multi-select-cell", sx: { width: "45px" } }, { children: _jsx(Checkbox, { checked: false, className: "multi-select-check", onChange: (e) => {
                                                        e.preventDefault();
                                                        handleMultiSelect(item.id);
                                                    } }) }))), 
                                            // iterating columns, with last columns in vertical layout on smaller screens
                                            columns && columns.slice(0, dataColCount).map((colMap, index) => {
                                                return (_jsx(TableCell, Object.assign({ className: colMap.primary ? "primary" : "" }, { children: colMap.value
                                                        ? colMap.value(item)
                                                        : colMap.dataField
                                                            ? item[colMap.dataField]
                                                            : "" }), index));
                                            }), (actionRowFactory || extendedRowFactory) && (_jsx(TableCell, Object.assign({ className: "context-actions", style: { verticalAlign: "middle" } }, { children: _jsxs(TableRowButtons, { children: [(!isActionRowHiddenCallback || !isActionRowHiddenCallback(item)) && actionRowFactory && (_jsx(ToggleButton, Object.assign({ value: isMenuOpen(item.id), id: item.id.toString(), className: `toggle-menu-button ${isMenuOpen(item.id) ? "toggled" : ""}`, onClick: (e) => {
                                                                e.preventDefault();
                                                                toggleMenuOpen(item.id);
                                                            }, onTouchEnd: (e) => {
                                                                e.preventDefault();
                                                                toggleMenuOpen(item.id);
                                                            } }, { children: isMenuOpen(item.id) ? _jsx(ArrowUpward, {}) : _jsx(ArrowDownward, {}) }))), extendedRowFactory && (_jsx(ToggleButton, Object.assign({ value: isRowExtended(item.id), id: item.id.toString(), className: `toggle-menu-button ${isRowExtended(item.id) ? "toggled" : ""}`, onClick: (e) => {
                                                                e.preventDefault();
                                                                toggleRowExtended(item.id);
                                                            }, onTouchEnd: (e) => {
                                                                e.preventDefault();
                                                                toggleMenuOpen(item.id);
                                                            } }, { children: isRowExtended(item.id) ? _jsx(ArrowUpward, {}) : _jsx(ArrowDownward, {}) })))] }) })))] })), extendedRow && extendedRowFactory && (_jsx(Collapse, Object.assign({ component: "tr", in: isRowExtended(item.id), id: item.id.toString() }, { children: _jsx(TableCell, Object.assign({ colSpan: totalColCount, sx: { p: 3 }, className: "extended-table-container" }, { children: extendedRowFactory(item) })) }))), actionRowFactory && (_jsx(ExpandRow, Object.assign({ id: item.id, isOpen: isMenuOpen(item.id), colSpan: totalColCount }, { children: actionRowFactory(item) })))] }, index));
                        }), _jsx(ConditionalFragment, Object.assign({ showIf: !isLoading && !(items === null || items === void 0 ? void 0 : items.length) && showNoResultsMessage }, { children: _jsx(TableRow, { children: _jsx(TableCell, Object.assign({ colSpan: totalColCount }, { children: _jsx(NoResultsFound, { search: search !== null && search !== void 0 ? search : "" }) })) }) })), _jsx(TableRow, Object.assign({ sx: { borderBottom: "none" } }, { children: _jsx(TableCell, Object.assign({ colSpan: totalColCount, sx: { borderBottom: "none" } }, { children: fetchMore && hasMore && (_jsxs(Box, Object.assign({ sx: { minHeight: "5px" } }, { children: [_jsx(ConditionalFragment, Object.assign({ showIf: !isLoading && !!(items === null || items === void 0 ? void 0 : items.length) && hasMore() }, { children: _jsx(Waypoint, { scrollableAncestor: window, onEnter: () => fetchMore() }, (_a = items === null || items === void 0 ? void 0 : items.length) !== null && _a !== void 0 ? _a : 0) })), _jsx(ConditionalFragment, Object.assign({ showIf: isLoading }, { children: _jsx(LoadingIndicator, { fullWidth: true }) }))] }))) })) }))] })] })) }));
}
