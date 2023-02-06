import * as React from 'react';
import {Helmet} from 'react-helmet-async';

/**
 * Component that shows the sidebar if it is required/recommended for the screensize.
 */
export const SidebarRequired = () => {

    return (
        <>
            <Helmet>
                <body data-sidebar-required="true" />
            </Helmet>
        </>
    );
};


export function useIsSidebarRequired(): boolean {

    const [isRequired, setIsRequired] = React.useState<boolean>(false);

    React.useEffect(() => {

        const observer = new MutationObserver((mutations) => {

            for (const mutation of mutations) {
                if (mutation.attributeName !== "data-sidebar-required") continue;
                setIsRequired(document.body.dataset.sidebarRequired === "true");
            }
        });

        observer.observe(document.body, {attributes: true, attributeFilter: ["data-sidebar-required"]});
        return () => observer.disconnect();
    }, [setIsRequired]);

    return isRequired;
}
