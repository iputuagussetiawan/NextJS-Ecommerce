import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from '@mui/styles';
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';
import { FormControl } from '@mui/material';
import { ListItemText } from '@mui/material';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import styles from "./styles.module.scss";
import { useField, Field, ErrorMessage } from "formik";
const useStyles = makeStyles((theme) => ({
    formControl: {
        //margin: theme.spacing(1),
        minWidth: 120,
        width: "100%",
    },
    chips: {
        display: "flex",
        flexWrap: "wrap",
    },
    chip: {
        margin: 2,
    },
}));

function getStyles(name, personName, theme) {
    return {
        fontWeight:
        personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelect({
    data,
    handleChange,
    value,
    name,
    header,
    disabled,
    ...rest
}) {
    const [subs, setSubs] = useState(data || []);
    const [field, meta] = useField(rest);
    useEffect(() => {
        setSubs(data);
    }, [data]);
    const result = data.length
        ? data.reduce((obj, cur) => ({ ...obj, [cur._id]: cur.name }), {})
        : {};

    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    return (
        <div>
            <div
                className={`${styles.header} ${
                meta.error[name] ? styles.header__error : ""
                }`}
            >
                <div className={styles.flex}>
                    {meta.error[name] && <img src="../../../images/warning.png" alt="" />}
                    {header}
                </div>
                <span>
                    {meta.touched && meta.error.subCategories && (
                        <div className={styles.error__msg}>
                        <span></span>
                        <ErrorMessage name={name} />
                        </div>
                    )}
                </span>
            </div>
            <FormControl className={classes.formControl}>
                {/*
                <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel> */}
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={value}
                    onChange={handleChange}
                    name={name}
                    disabled={disabled}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                        <div className={classes.chips}>
                            {selected.map((value) => (
                                <Chip
                                    key={value}
                                    label={result[value]}
                                    className={classes.chip}
                                />
                            ))}
                        </div>
                    )}
                >
                    {result &&
                        Object.keys(result).map((id) => {
                        return (
                            <MenuItem key={id} value={id}>
                            <Checkbox checked={value.indexOf(id) > -1} />
                            <ListItemText primary={result[id]} />
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </div>
    );
}
