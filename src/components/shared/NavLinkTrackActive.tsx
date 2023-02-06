import * as React from 'react';
import {NavLink, NavLinkProps} from 'react-router-dom';
import {Box} from "@mui/material";

export interface NavLinkTrackActiveProps extends NavLinkProps {
    activeClassName?: string,
    innerRef?: any,
}


export const NavLinkTrackActive = React.forwardRef(({to, activeClassName, children, ...rest}: NavLinkTrackActiveProps, ref) => (
    <NavLink to={to}
             className={({isActive}) => isActive && activeClassName ? activeClassName : "active"}
             {...rest} >
        <Box sx={{display: "flex", alignItems: "center", flexDirection: "row"}}>
            <Box className={"active-pill"}/>
            {children as React.ReactNode}
        </Box>
    </NavLink>
));


/**
 * NavLink from react-router configured to track the active component with the active class.
 *
 * This simply returns a <NavLink> that is preconfigured with activeClassName="active".
 */
const MyNavLinkTrackActive = (props: NavLinkTrackActiveProps) => {
    const {to, activeClassName, children, ...rest} = props;

    // const navigate = useNavigate();
    // const location = useLocation();
    // const isActive = location.pathname !== "/" && location.pathname.includes(to.toString());


    return (
        <NavLink to={to}
                 className={({isActive}) => isActive && activeClassName ? activeClassName : "active"}
                 {...rest} >
            <Box sx={{display: "flex", alignItems: "center", flexDirection: "row"}}>
                <Box className={"active-pill"}/>
                {children as React.ReactNode}
            </Box>
        </NavLink>
    );
};

