import React, { FC } from 'react';
import TextField from '@material-ui/core/TextField';
import { keywordProps } from '../types/props';

const TextInput: FC<keywordProps> = (props) => {
    return (
        <TextField
            fullWidth={props.item.fullWidth}
            label={props.item.label}
            margin="dense"
            multiline={props.item.multiline}
            required={props.item.required}
            rows={props.item.rows}
            value={props.item.value}
            type={props.item.type}
            onChange={props.item.onChange}
        />
    )
}

export default TextInput;
