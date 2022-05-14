import React, {FunctionComponent, memo} from 'react';
import Page from "../../shared/components/Page/Page";
import title from "../../shared/components/Page/Title";
import {PhoneDetailData} from "./models";
import {Grid, Paper} from "@mui/material";
import Specifications from "./Specifications";
interface DetailProps {
    phoneData: PhoneDetailData
}




const Detail:FunctionComponent<DetailProps> = ({phoneData}) => {
    return (
        <Page title={phoneData.phone_name}>
           <Paper >
               <Grid container direction='column'>
                   {phoneData.specifications.map((s) => (
                       <Grid item xs key={s.title}>
                            <Specifications specification={s}/>
                       </Grid>
                   ))}
               </Grid>
           </Paper>
        </Page>
    );
};

export default memo(Detail);
