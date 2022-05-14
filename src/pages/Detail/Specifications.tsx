import React, {FunctionComponent, memo} from 'react';
import {Specification} from "./models";
import {Box, Typography} from "@mui/material";
interface SpecificationsProps {
    specification: Specification;
}



const Specifications:FunctionComponent<SpecificationsProps> = ({specification}) => {
    return (
        <Box>
           <Typography variant='h5'>{specification.title}</Typography>
        </Box>
    );
};

export default memo(Specifications);