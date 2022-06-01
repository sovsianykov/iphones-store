import React, {FunctionComponent, memo, useCallback, useEffect, useState} from 'react';
import {Box, FormGroup, TextField} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useAppDispatch } from "../../../hooks/redux";
import {filterPhones} from "../../../store/ducks";


const useStyles = makeStyles(() => ({
    root: {
        display:'flex',
        alignItems:"center",
        justifyContent:'space-between',
        background:'whitesmoke',
        marginLeft: 50,
    },
    textArea: {
        width: 150,
    },
    input: {
        width:150,
        color:"#d2d1d1",
    }
}));




const Search:FunctionComponent = () => {
    const classes = useStyles()
    const [searchQuery, setSearchQuery] = useState("");
    const dispatch = useAppDispatch();

    const onInputChange = useCallback((e) =>{
        setSearchQuery(e.target.value)
    },[])

    useEffect(() => {
        dispatch(filterPhones(searchQuery.toLowerCase().trim()))
    },[dispatch, searchQuery])

    return (
        <Box className={classes.root} >
        <FormGroup className={classes.textArea}>
            <TextField
                id="search-bar"
                onChange={(e) => {
                    onInputChange(e);
                }}
                InputProps={{
                    className: classes.input,
                }}
                value={searchQuery}
                variant="outlined"
                placeholder="Search..."
                size="small"
            />
        </FormGroup>
        </Box>
    );
};

export default memo(Search);