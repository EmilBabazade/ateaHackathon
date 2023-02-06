import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
/**
 * Component that shows the sidebar if it is required/recommended for the screensize.
 */
export const SidebarRequired = () => {
    return (_jsx(_Fragment, { children: _jsx(Helmet, { children: _jsx("body", { "data-sidebar-required": "true" }) }) }));
};
export function useIsSidebarRequired() {
    const [isRequired, setIsRequired] = React.useState(false);
    React.useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.attributeName !== "data-sidebar-required")
                    continue;
                setIsRequired(document.body.dataset.sidebarRequired === "true");
            }
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ["data-sidebar-required"] });
        return () => observer.disconnect();
    }, [setIsRequired]);
    return isRequired;
}
