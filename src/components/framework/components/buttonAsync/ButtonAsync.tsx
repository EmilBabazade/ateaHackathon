import React from "react";
import {ButtonProps} from "@mui/material/Button";
import {Button, LinearProgress, SxProps, Theme} from "@mui/material";
import classNames from "classnames";


export interface ButtonAsyncProps extends ButtonProps {
    isExecuting?: boolean,
    executingMessage?: string,
    executingChildren?: React.ReactNode,
    success?: boolean,
    successChildren?: React.ReactNode,
}

const buttonStyle: SxProps<Theme> = {
    position: 'relative',
    overflow: "hidden",
    "&.success": {
        backgroundColor: "success.main",
    },
};


export function ButtonAsync(props: ButtonAsyncProps) {
    const {
        isExecuting,
        className,
        startIcon,
        success,
        successChildren,
        executingMessage,
        variant = "contained",
        executingChildren,
        sx,
        children,
        ...rest
    } = props;

    const c = classNames(className, {'success': success});

    return (
        <Button sx={{...sx, ...(buttonStyle as any)}}
                startIcon={success && successChildren ? undefined : startIcon}
                variant={variant}
                {...rest}
                className={c}
                disabled={isExecuting}>
            {isExecuting ? (
                <>
                    {executingChildren ?? executingMessage ?? children}
                    <LinearProgress color={"primary"} sx={{
                        position: 'absolute',
                        width: "100%",
                        bottom: 0,
                    }}/>
                </>
            ) : (
                <>
                    {success && successChildren ? successChildren : children}
                </>
            )}
        </Button>
    );

}