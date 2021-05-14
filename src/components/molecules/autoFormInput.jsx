import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const AutoFormImput=({id, name, values,returnValue}) =>{
    
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
    const classes = useStyles();
    const [selectValue, setSelectedValue] = React.useState('');
    
    const changeSelectedValue = (event) => {
        setSelectedValue(event.target.value);
        returnValue(event.target.value);
    };
    
    return (
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id={id}>{name}</InputLabel>
            <Select
            labelId={id}
            id={id}
            value={selectValue}
            onChange={changeSelectedValue}
            >
                <MenuItem value="">
                        <em>None</em>
                </MenuItem>
                {
                    values.map(v => (
                        <MenuItem value={v}>{v}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}

export default AutoFormImput