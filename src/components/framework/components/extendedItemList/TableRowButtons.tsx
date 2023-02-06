import * as React from 'react';

export interface TableRowButtonsProps {
    className?: string,
    children: React.ReactNode
}

/**
 * Container for buttons used in a table's row.
 */
export const TableRowButtons = (props: TableRowButtonsProps) => {
    const { className, children } = props;

    return (
        <div className={`table-row-buttons ${className ?? ''}`}>
            {children}
        </div>
        );
};