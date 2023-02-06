import * as React from 'react';
import {atom, useRecoilState} from "recoil";
import {persistAtom} from "../components/configuration/recoilConfig";

export interface DashboardState {
    savedDashboards: string[],
}

export const globalDashboardState = atom<DashboardState[]>({
    key: 'globalDashboardState',
    default: [],
    effects: [persistAtom]
});

export function useglobalDashboardState(): [DashboardState[], React.Dispatch<React.SetStateAction<DashboardState[]>>] {
    const [value, setValue] = useRecoilState(globalDashboardState);
    return [value, setValue];
}