
import {createAsyncThunk} from "@reduxjs/toolkit";

import httpService from '../../../api/axios'


export const fetchPhoneDetail = createAsyncThunk(
    'phoneDetail/fetch',
    async (url:string) => {
        const response = await httpService().GET(url)
        return response.data.data
    }
)