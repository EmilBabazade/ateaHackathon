var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { useTranslation } from "react-i18next";
import { SearchInput } from "../../../components/shared/SearchInput";
import { Box, Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, useMediaQuery } from "@mui/material";
import { FilterList, Label as LabelIcon, LabelOutlined as LabelIconOutlined, Visibility } from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2";
export function ListFilter(props) {
    const { onFiltersToggled, filters, maxShown: _maxShown = 3, multiSelect = false, showClearButton = true, showSearch = true } = props, searchInputProps = __rest(props, ["onFiltersToggled", "filters", "maxShown", "multiSelect", "showClearButton", "showSearch"]);
    const { t } = useTranslation();
    const [selectedFilters, setSelectedFilters] = React.useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [maxShown, setMaxShown] = React.useState(_maxShown);
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));
    const handleFilterSelected = (filter) => {
        if (!filter) {
            // clean filter array
            setSelectedFilters([]);
            onFiltersToggled && onFiltersToggled([]);
            return;
        }
        if (selectedFilters.includes(filter)) {
            // remove filter from selected array
            const filters = multiSelect ? selectedFilters.filter(f => f !== filter) : [];
            setSelectedFilters(filters);
            onFiltersToggled && onFiltersToggled(filters);
        }
        else {
            // add filter to selected array
            const filters = multiSelect ? [...selectedFilters, filter] : [filter];
            setSelectedFilters(filters);
            onFiltersToggled && onFiltersToggled(filters);
        }
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const { shownFilters = [], hiddenFilters = [] } = React.useMemo(() => {
        if (!filters)
            return { shownFilters: [], hiddenFilters: [] };
        if (filters.length <= maxShown)
            return { shownFilters: filters, hiddenFilters: [] };
        return {
            shownFilters: filters.slice(0, maxShown),
            hiddenFilters: filters.slice(maxShown, filters.length),
        };
    }, [maxShown, filters]);
    React.useEffect(() => {
        if (!isDesktop) {
            setMaxShown(0);
        }
        else {
            setMaxShown(_maxShown);
        }
    }, [_maxShown, isDesktop]);
    return (_jsx(Box, Object.assign({ className: "list-filter" }, { children: _jsxs(Grid2, Object.assign({ container: true, spacing: 1 }, { children: [_jsxs(Grid2, Object.assign({ xs: 3, md: 8, display: "flex", alignItems: "center" }, { children: [showClearButton && isDesktop && (_jsx(Tooltip, Object.assign({ title: t('listFilter.showAll', 'Show All') }, { children: _jsx("span", { children: _jsx(Button, { className: "filter-button", disabled: !selectedFilters || selectedFilters.length === 0, color: "primary", startIcon: _jsx(Visibility, {}), onClick: () => handleFilterSelected("") }) }) }))), shownFilters === null || shownFilters === void 0 ? void 0 : shownFilters.map((filter, i) => (_jsx(Button, Object.assign({ className: "filter-button", color: selectedFilters.includes(filter) ? 'secondary' : 'primary', startIcon: selectedFilters.includes(filter) ? _jsx(LabelIcon, {}) : _jsx(LabelIconOutlined, {}), onClick: () => handleFilterSelected(filter) }, { children: filter }), i))), hiddenFilters && hiddenFilters.length > 0 && (_jsxs(_Fragment, { children: [_jsx(Button, { startIcon: _jsx(FilterList, {}), onClick: handleClick }), _jsxs(Menu, Object.assign({ id: "account-menu", anchorEl: anchorEl, open: !!anchorEl, onClose: handleClose, onClick: handleClose, transformOrigin: { horizontal: 'right', vertical: -15 }, anchorOrigin: { horizontal: 'right', vertical: 'bottom' }, PaperProps: {
                                        sx: {
                                            backgroundColor: "background.default",
                                        }
                                    } }, { children: [_jsxs(MenuItem, Object.assign({ disabled: !selectedFilters || selectedFilters.length === 0, className: "filter-button show-all", onClick: () => handleFilterSelected("") }, { children: [_jsx(ListItemIcon, { children: _jsx(Visibility, {}) }), _jsx(ListItemText, { children: t('listFilter.showAll', 'Show All') })] })), _jsx(Divider, {}), hiddenFilters === null || hiddenFilters === void 0 ? void 0 : hiddenFilters.map((filter, i) => (_jsxs(MenuItem, Object.assign({ disabled: selectedFilters.includes(filter), onClick: () => handleFilterSelected(filter) }, { children: [_jsx(ListItemIcon, { children: _jsx(LabelIconOutlined, {}) }), _jsx(ListItemText, { children: filter })] }), i)))] }))] }))] })), _jsx(Grid2, Object.assign({ xs: 9, md: 4, display: "flex", alignItems: "center" }, { children: showSearch && (_jsx(SearchInput, Object.assign({}, searchInputProps))) }))] })) })));
}
