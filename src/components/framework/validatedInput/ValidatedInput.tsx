import React from "react";
import {Checkbox, CheckboxProps, FormControl, FormControlLabel, FormHelperText, InputLabel, OutlinedInput, RadioGroupProps, Select, SelectProps,} from "@mui/material";
import {OutlinedInputProps} from "@mui/material/OutlinedInput/OutlinedInput";


export interface ValidatedInputProps extends OutlinedInputProps {
    id?: string,
    name?: string,
    variant?: 'standard' | 'outlined' | 'filled',
    helpText?: string,
    hideFormFeedback?: boolean,
    append?: React.ReactNode,
    prepend?: React.ReactNode,
    step?: number,
    min?: Date | number | any,
    max?: Date | number | any,
}

export const ValidatedInput = (props: ValidatedInputProps) => {
    const {
        id,
        variant,
        hideFormFeedback,
        fullWidth,
        label,
        name,
        append,
        prepend,
        inputProps,
        helpText,
        step,
        required,
        min,
        max,
        ...rest
    } = props;


    const shrinkLabel = !!rest.type && [
        "date",
        "datetime",
    ].includes(rest.type);

    return (
        <FormControl required={required} variant={variant} fullWidth margin={"dense"}>
            {shrinkLabel ? (
                // work-around for not dealing with shrink for other types. Probably a better way to do it?
                <InputLabel htmlFor={id ?? name} shrink={true} style={{backgroundColor: "white"}}>{label}</InputLabel>
            ) : (
                <InputLabel htmlFor={id ?? name}>{label}</InputLabel>
            )}
            <OutlinedInput
                {...rest}
                id={id ?? name}
                label={props.label}
                endAdornment={append}
                startAdornment={prepend}

                inputProps={{
                    step: step,
                    min: min,
                    max: max,
                    ...inputProps,
                }}
            />
            {!!helpText && (
                <FormHelperText>{helpText}</FormHelperText>
            )}
        </FormControl>

    );
};


export interface ValidatedCheckBoxProps extends CheckboxProps {
    label?: string,
    helpText?: string,
    hideFormFeedback?: boolean,
}


export const ValidatedCheckBox = (props: ValidatedCheckBoxProps) => {
    const {
        inputProps,
        required,
        label,
        helpText,
        hideFormFeedback,
        ...rest
    } = props;


    return (
        <FormControl required={required} fullWidth margin={"dense"}>
            <FormControlLabel control={<Checkbox {...rest} />} label={label} />

            {!!helpText && (
                <FormHelperText>{helpText}</FormHelperText>
            )}
        </FormControl>

    );
};


export interface ValidatedRadioGroupProps extends RadioGroupProps {
    label?: string,
    values: Array<{value?: string | number, label: string}>
    helpText?: string,
    hideFormFeedback?: boolean,
    required?: boolean,
}



export interface ValidatedSelectProps extends SelectProps {
    labelId: string,
    helpText?: string,
    hideFormFeedback?: boolean,
    required?: boolean,
}


export const ValidatedSelect = (props: ValidatedSelectProps) => {
    const {
        labelId,
        required,
        label,
        helpText,
        hideFormFeedback,
        children,
        ...rest
    } = props;



    return (
        <FormControl required={required} fullWidth margin={"dense"}>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Select
                MenuProps={{sx: {maxHeight: 350}}}
                labelId={labelId}
                label={label}
                {...rest}
            >
                {children}
            </Select>
            {!!helpText && (
                <FormHelperText>{helpText}</FormHelperText>
            )}
        </FormControl>

    );
};


