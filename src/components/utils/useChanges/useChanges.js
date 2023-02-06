import * as React from 'react';

/**
 * Hook that makes it easy to apply changes ontop of original data.
 */
export function useChanges(unchanged){
    // Store changes in the state.
    const [changes, setChanges] = React.useState(initialChanges);

    // Provide a method to apply a change or set of changes.
    const change = React.useCallback((changes) => {
        setChanges(prevState =>({
                ...prevState,
                ...changes
            }));
    }, [setChanges]);

    // Provide a method to reset all changes.
    const reset = React.useCallback(() => {
        setChanges({});
    }, [setChanges]);

    // Combine the initial model with the changes to produce model with its current state.
    const model = React.useMemo(() => {
        return {
            ...(unchanged ?? {}), ...changes
        };
    }, [unchanged, changes]);

    // Combine everything into a return value and return it (caching it with useMemo()).
    const ret = React.useMemo(() => ({
        change: change,
        changes: changes,
        reset: reset,
        model: model
    }), [changes, change, reset, model]);

    return ret;
}