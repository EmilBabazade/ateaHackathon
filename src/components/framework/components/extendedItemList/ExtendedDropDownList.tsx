import React from "react";
import {ValidationErrors} from "pojo-validator";
import {DataObject} from "./ExdendedItemListProps";
import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent
} from "@mui/material";


export interface ExtendedDropDownListProps<T extends DataObject> {
    className?: string,
    name?: string,
    validationErrors: ValidationErrors | Array<string> | string | undefined | null,
    value?: string | number,
    onChange?: (value?: string | number) => void,
    onBlur?: (value?: string | number) => void,
    data: T[],
    idField: (item: T) => string | number,
    itemLabel: (item: T) => string | React.ReactNode,
    renderValue?: (value?: T | null) => React.ReactNode,
    label?: string,
    helpText?: string,
    emptyValue?: string,
    required?: boolean,
    readOnly?: boolean,
    append?: React.ReactNode,
    prepend?: React.ReactNode,
    menuItemEnd?: React.ReactNode,
}


export function ExtendedDropDownList<T extends DataObject>(props: ExtendedDropDownListProps<T>) {
    const {
        className,
        name,
        validationErrors,
        label,
        helpText,
        required,
        value,
        data,
        append,
        prepend,
        menuItemEnd,
        itemLabel,
        idField,
        emptyValue = "",
        renderValue,
        onBlur,
        onChange,
        readOnly,
    } = props;


    const onItemChanged = (event: SelectChangeEvent<string | number>) => {
        const {
            target: {value},
        } = event;

        onChange && onChange(value);
    };


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
        <FormControl className={className} id={name} fullWidth margin={"dense"} variant={"outlined"}>
            <InputLabel required={required} id={`${name}-label`} htmlFor={name}>{label}</InputLabel>
            <Select
                id={name}
                required={required}
                value={value}
                label={label}
                readOnly={readOnly}
                input={
                    <OutlinedInput label={label}/>
                }
                onBlur={(e) => onBlur && onBlur(e.target.value)}
                onChange={(e) => onItemChanged(e)}
                renderValue={(item) => renderValue && renderValue(data?.find(i => i.id === item))}
                displayEmpty={!!emptyValue}
                startAdornment={prepend}
                endAdornment={append}

            >
                {data?.map((item, i) => (
                    <MenuItem key={i} value={idField(item)}>
                        {itemLabel(item)}
                    </MenuItem>
                ))}
                {menuItemEnd && (
                    <MenuItem>
                        {menuItemEnd}
                    </MenuItem>
                )}

            </Select>
            {!!helpText && (
                <FormHelperText>{helpText}</FormHelperText>
            )}
            {!!errors.length && (
                <FormHelperText>{errors.join(',')}</FormHelperText>
            )}

        </FormControl>
    );
}