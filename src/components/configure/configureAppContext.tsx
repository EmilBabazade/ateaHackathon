import { PaletteMode } from "@mui/material";
import React, {ProviderProps} from "react";


export interface IAppContext {
    debugOpen?: boolean,
    setDebugOpen?: (sidebarOpen: boolean) => void,
    sidebarOpen?: boolean,
    setSidebarOpen?: (sidebarOpen: boolean) => void,
    sidebarCollapsed?: boolean,
    setSidebarCollapsed?: (sidebarOpen: boolean) => void,
}

export const AppContext = React.createContext<IAppContext>({
    sidebarOpen: false,
    debugOpen: false,
});


export const AppContextProvider = (props: ProviderProps<IAppContext>) => {
    const {children, value, ...rest} = props;

    return (
        <AppContext.Provider value={{...value}} {...rest}>
            {children}
        </AppContext.Provider>
    )
}


export interface IThemeColorContext {
    colorMode: PaletteMode,
    toggleColorMode?: () => void,
}

export const ThemeColorContext = React.createContext<IThemeColorContext>({
    colorMode: "light",
});
