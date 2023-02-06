import React from "react";
import {useTranslation} from "react-i18next";
import {SearchInput, SearchInputProps} from "../../../components/shared/SearchInput";
import {
    Box,
    Button,
    Divider,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Theme,
    Tooltip,
    useMediaQuery
} from "@mui/material";
import {FilterList, Label as LabelIcon, LabelOutlined as LabelIconOutlined, Visibility} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2";


export interface ListFilterProps extends SearchInputProps {
    onFiltersToggled?: (selectedFilters: string[]) => void,
    filters?: string[],
    multiSelect?: boolean,
    showClearButton?: boolean,
    showSearch?: boolean,
    maxShown?: number
}

export function ListFilter(props: ListFilterProps) {
    const {
        onFiltersToggled,
        filters,
        maxShown: _maxShown = 3,
        multiSelect = false,
        showClearButton = true,
        showSearch = true,
        ...searchInputProps
    } = props;

    const {t} = useTranslation();
    const [selectedFilters, setSelectedFilters] = React.useState<string[]>([]);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [maxShown, setMaxShown] = React.useState<number>(_maxShown);

    const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

    const handleFilterSelected = (filter: string) => {

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
        } else {
            // add filter to selected array
            const filters = multiSelect ? [...selectedFilters, filter] : [filter];
            setSelectedFilters(filters);
            onFiltersToggled && onFiltersToggled(filters);
        }
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const {shownFilters = [], hiddenFilters = []} = React.useMemo(() => {
        if (!filters) return {shownFilters: [], hiddenFilters: []};

        if (filters.length <= maxShown) return {shownFilters: filters, hiddenFilters: []};

        return {
            shownFilters: filters.slice(0, maxShown),
            hiddenFilters: filters.slice(maxShown, filters.length),
        };

    }, [maxShown, filters]);


    React.useEffect(() => {
        if (!isDesktop) {
            setMaxShown(0);
        } else {
            setMaxShown(_maxShown);
        }
    }, [_maxShown, isDesktop]);

    return (
        <Box className={"list-filter"}>
            <Grid2 container spacing={1}>
                <Grid2 xs={3} md={8} display={"flex"} alignItems={"center"}>
                    {showClearButton && isDesktop && (
                        <Tooltip title={t('listFilter.showAll', 'Show All')}>
                            <span>
                                <Button className={"filter-button"}
                                        disabled={!selectedFilters || selectedFilters.length === 0}
                                        color={"primary"}
                                        startIcon={<Visibility/>}
                                        onClick={() => handleFilterSelected("")}>

                            </Button>
                            </span>
                        </Tooltip>
                    )}
                    {shownFilters?.map((filter, i) => (
                        <Button className={"filter-button"}
                                color={selectedFilters.includes(filter) ? 'secondary' : 'primary'} key={i}
                                startIcon={selectedFilters.includes(filter) ? <LabelIcon/> : <LabelIconOutlined/>}
                                onClick={() => handleFilterSelected(filter)}
                        >

                            {filter}
                        </Button>
                    ))}
                    {hiddenFilters && hiddenFilters.length > 0 && (
                        <>
                            <Button
                                startIcon={<FilterList/>}
                                onClick={handleClick}

                            >
                            </Button>

                            <Menu
                                id="account-menu"
                                anchorEl={anchorEl}
                                open={!!anchorEl}
                                onClose={handleClose}
                                onClick={handleClose}
                                transformOrigin={{horizontal: 'right', vertical: -15}}
                                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                                PaperProps={{
                                    sx: {
                                        backgroundColor: "background.default",
                                    }
                                }}
                            >

                                <MenuItem
                                    disabled={!selectedFilters || selectedFilters.length === 0}
                                    className={"filter-button show-all"}
                                    onClick={() => handleFilterSelected("")}
                                >
                                    <ListItemIcon>
                                        <Visibility/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        {t('listFilter.showAll', 'Show All')}
                                    </ListItemText>
                                </MenuItem>
                                <Divider/>
                                {hiddenFilters?.map((filter, i) => (
                                    <MenuItem disabled={selectedFilters.includes(filter)} key={i}
                                              onClick={() => handleFilterSelected(filter)}>
                                        <ListItemIcon>
                                            <LabelIconOutlined/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            {filter}
                                        </ListItemText>
                                    </MenuItem>
                                ))}
                            </Menu>

                        </>
                    )}
                </Grid2>
                <Grid2 xs={9} md={4} display={"flex"} alignItems={"center"}>
                    {showSearch && (
                        <SearchInput {...searchInputProps}/>
                    )}
                </Grid2>
            </Grid2>
        </Box>
    );
}