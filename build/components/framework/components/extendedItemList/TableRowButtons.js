import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Container for buttons used in a table's row.
 */
export const TableRowButtons = (props) => {
    const { className, children } = props;
    return (_jsx("div", Object.assign({ className: `table-row-buttons ${className !== null && className !== void 0 ? className : ''}` }, { children: children })));
};
