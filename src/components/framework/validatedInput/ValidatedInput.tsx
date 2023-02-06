import React from "react";
import {ValidationErrors} from "pojo-validator";
import {
    Checkbox,
    CheckboxProps,
    FormControl,
    FormControlLabel, FormControlProps,
    FormHelperText, FormLabel,
    InputLabel, MenuItem,
    OutlinedInput, Radio, RadioGroup, RadioGroupProps, Select, SelectProps,
} from "@mui/material";
import {OutlinedInputProps} from "@mui/material/OutlinedInput/OutlinedInput";
import notEmpty from "../../shared/notEmpty";


export interface ValidatedInputProps extends OutlinedInputProps {
    id?: string,
    name?: string,
    variant?: 'standard' | 'outlined' | 'filled',
    validationErrors?: ValidationErrors | Array<string> | string | undefined | null,
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
        validationErrors,
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


    // Find the errors based on the types we support.
    let errors: Array<string> = [];
    if (!validationErrors) {
        // Errors can stay as an empty array.
    } else if (typeof validationErrors === 'string') {
        errors = [validationErrors];
    } else if (Array.isArray(validationErrors)) {
        errors = validationErrors;
    } else {
        // We have ValidationErrors from Validator.errors()
        errors = validationErrors[(props.name ? props.name : '')] || [];
    }

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
                error={!!errors.length}

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
            {!!errors.length && !hideFormFeedback && (
                <FormHelperText error>{errors.join(',')}</FormHelperText>
            )}
        </FormControl>

    );
};


export interface ValidatedCheckBoxProps extends CheckboxProps {
    validationErrors?: ValidationErrors | Array<string> | string | undefined | null,
    label?: string,
    helpText?: string,
    hideFormFeedback?: boolean,
}


export const ValidatedCheckBox = (props: ValidatedCheckBoxProps) => {
    const {
        validationErrors,
        inputProps,
        required,
        label,
        helpText,
        hideFormFeedback,
        ...rest
    } = props;

    // Find the errors based on the types we support.
    let errors: Array<string> = [];
    if (!validationErrors) {
        // Errors can stay as an empty array.
    } else if (typeof validationErrors === 'string') {
        errors = [validationErrors];
    } else if (Array.isArray(validationErrors)) {
        errors = validationErrors;
    } else {
        // We have ValidationErrors from Validator.errors()
        errors = validationErrors[(props.name ? props.name : '')] || [];
    }

    return (
        <FormControl required={required} fullWidth margin={"dense"}>
            <FormControlLabel control={<Checkbox {...rest} />} label={label} />

            {!!helpText && (
                <FormHelperText>{helpText}</FormHelperText>
            )}
            {!!errors.length && !hideFormFeedback && (
                <FormHelperText error>{errors.join(',')}</FormHelperText>
            )}
        </FormControl>

    );
};


export interface ValidatedRadioGroupProps extends RadioGroupProps {
    validationErrors?: ValidationErrors | Array<string> | string | undefined | null,
    label?: string,
    values: Array<{value?: string | number, label: string}>
    helpText?: string,
    hideFormFeedback?: boolean,
    required?: boolean,
}


export const ValidatedRadioGroup = (props: ValidatedRadioGroupProps) => {
    const {
        values,
        validationErrors,
        required,
        defaultValue,
        label,
        helpText,
        hideFormFeedback,
        ...rest
    } = props;

    // Find the errors based on the types we support.
    let errors: Array<string> = [];
    if (!validationErrors) {
        // Errors can stay as an empty array.
    } else if (typeof validationErrors === 'string') {
        errors = [validationErrors];
    } else if (Array.isArray(validationErrors)) {
        errors = validationErrors;
    } else {
        // We have ValidationErrors from Validator.errors()
        errors = validationErrors[(props.name ? props.name : '')] || [];
    }

    return (
        <FormControl required={required} fullWidth margin={"dense"}>
            <FormLabel>{label}</FormLabel>
            <RadioGroup defaultValue={defaultValue}  {...rest}>
                {values?.filter(notEmpty)?.map(({value, label}, index) => (
                    <FormControlLabel key={index} value={value} control={<Radio />} label={label} />
                ))}
            </RadioGroup>
            {!!helpText && (
                <FormHelperText>{helpText}</FormHelperText>
            )}
            {!!errors.length && !hideFormFeedback && (
                <FormHelperText error>{errors.join(',')}</FormHelperText>
            )}
        </FormControl>

    );
};

export interface ValidatedSelectProps extends SelectProps {
    labelId: string,
    validationErrors?: ValidationErrors | Array<string> | string | undefined | null,
    helpText?: string,
    hideFormFeedback?: boolean,
    required?: boolean,
}


export const ValidatedSelect = (props: ValidatedSelectProps) => {
    const {
        labelId,
        validationErrors,
        required,
        label,
        helpText,
        hideFormFeedback,
        children,
        ...rest
    } = props;


    // Find the errors based on the types we support.
    let errors: Array<string> = [];
    if (!validationErrors) {
        // Errors can stay as an empty array.
    } else if (typeof validationErrors === 'string') {
        errors = [validationErrors];
    } else if (Array.isArray(validationErrors)) {
        errors = validationErrors;
    } else {
        // We have ValidationErrors from Validator.errors()
        errors = validationErrors[(props.name ? props.name : '')] || [];
    }

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
            {!!errors.length && !hideFormFeedback && (
                <FormHelperText error>{errors.join(',')}</FormHelperText>
            )}
        </FormControl>

    );
};


