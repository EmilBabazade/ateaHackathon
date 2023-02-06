import React from "react";
import i18n from "i18next";


export const translatedString = (key: string, value: string) => i18n.t(key, value); // need this for col map to work?

export interface Grouping<T> { [key: string]: T[] }

export interface DataObject {
    id: string | number
}

export interface ColumnMap<T extends DataObject> {
    columnName: string,
    value?: (item: T) => React.ReactNode,
    dataField?: string,
    primary?: boolean,
}

export interface ExtendedItemListProps <T extends DataObject> {
    color?: string,
    columns?: ColumnMap<T>[],
    defaultSortColumn?: string,
    groupBy?: (item: T) => string,
    data?: (T | null)[],
    fetchMore?: () => void,
    hasMore?: () => boolean,
    refresh?: () => Promise<void>,
    onRowDoubleClick?: (item: T) => void,
    onClick?: (item: T) => void,
    onSelectedItemsChanged?: (items: Array<string | number>) => void,
    actionRowFactory?: (item: T) => React.ReactNode,
    extendedRowFactory?: (item: T) => React.ReactNode,
    notFoundChildren?: React.ReactNode,
    isActionRowHiddenCallback?: (item: T) => boolean,
    hasMultiSelect?: boolean,
    isLoading?: boolean,
    showNoResultsMessage?: boolean,
}
