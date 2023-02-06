import {createTheme,  responsiveFontSizes} from "@material-ui/core";


const palleteLight = {
    mode: "light",
    primary: {main: "#808d96", contrastText: "#fff"},
    secondary: {main: "#7fc140", contrastText: "#fff", light: "#fff"},
    error: {main: "#f86c6b", contrastText: "#fff"},
    warning: {main: "#ffc107"},
    success: {main: "#4dbd74"},
    info: {main: "#63c2de"},
    surface: {main: "#ef0000"},
    accentBackground: {main: "#fff", contrastText: "#dadada"},
    accentSurface: {main: "#e2eff1", contrastText: "#2f353a"},
    accentText: {main: "#f3f2ef"},
    dark: {main: "#2f353a", contrastText: "#e4e7ea"},
    light: {main: "#e4e7ea", contrastText: "#2f353a"},
    background: {default: "#edece9", paper: "#fff"},
};

const paletteDark = {
    ...palleteLight,
    mode: "dark",
    primary: {main: "#e1e1e1",},
    accentBackground: {main: "#3d3d3d", contrastText: "#525d6b"},
    background: {default: "#1f1f1f", paper: "#3d3d3d"},


};

export const getTheme = (darkMode) => {
    let t = createTheme({
        palette: darkMode ? paletteDark : palleteLight,
        shape: {
            borderRadius: 4,
        },
        components: {
            MuiButton: {
                defaultProps: {
                    disableElevation: true,
                },
            },
            MuiTypography: {
                defaultProps: {
                    variantMapping: {
                        title: "span"
                    }
                }
            }
        },
        typography: {
            button: {
                textTransform: "none",
            },
            h1: {
                color: "secondary.main"
            },
            h2: {
                color: "secondary.main"
            },
            h3: {
                color: "secondary.main"
            },
            h4: {
                color: "secondary.main"
            },
            h5: {
                color: "secondary.main"
            },
            title: {
                fontSize: 16,
                fontWeight: 600,
            },
            description: {
                fontSize: 16,
                fontWeight: 300,
            },
            key: {
                fontSize: 14,
                fontWeight: 600,
            },
            value: {
                fontSize: 14,
                fontWeight: 300,
            },
        },
    });

    // font overrides
    t = responsiveFontSizes(t);

    t.typography.title = {
        ...t.typography.title,
        [t.breakpoints.up('sm')]: {
            fontSize: '1.2rem'
        }
    };

    t.typography.h5 = {
        ...t.typography.h5,
        fontSize: '16px',
        [t.breakpoints.up('sm')]: {
            fontSize: '16px',
        },
        [t.breakpoints.up('md')]: {
            fontSize: '16px',
        },
        [t.breakpoints.up('lg')]: {
            fontSize: '18px',
        },
        [t.breakpoints.up('xl')]: {
            fontSize: '20px',
        },
    };

    t.typography.description = {
        ...t.typography.description,
        color: t.palette.primary.main,
        [t.breakpoints.up('sm')]: {
            fontSize: '1rem',
        }
    };

    return t;
};