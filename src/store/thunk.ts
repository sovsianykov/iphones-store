import {createAsyncThunk} from "@reduxjs/toolkit";

import httpService from '../api/axios'


export const fetchPhones = createAsyncThunk(
    'phones/fetch',
    async (page:string) => {
        const response = await httpService().GET(page)
        return response.data.data
    }
)