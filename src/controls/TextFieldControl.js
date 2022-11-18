import React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import './TextFieldControl.css'

const TextFieldControl = (props) => {
  return (
    <span className={"text-field-control-wrapper"}>
      <Controller
        name={props.name}
        control={props.data}
        defaultValue={props.defaultValue}
        rules={props.rules}
        render={({ field }) => (
            <TextField
                {...field}
                InputLabelProps={{ shrink: Boolean(field.value) }}
                size={props.size ? props.size : "small"}
                fullWidth={props.fullWidth ? props.fullWidth : true}
                type={props.type}
                margin={props.margin ? props.margin : "normal"}
                error={props.error}
                helperText={props.helperText}
                label={props.label}
                disabled={props.disabled}
                placeholder={props.placeholder}
                inputRef={(input) => {
                if (props.inputRef && input != null) {
                    input.focus();
                }
                }}
            />
        )}
        />
    </span>
  );
};

export default TextFieldControl;
