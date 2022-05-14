import {createAsyncThunk} from "@reduxjs/toolkit";

import httpService from '../api/axios'


export const fetchPhones = createAsyncThunk(
    'phones/fetch',
    async (page:string) => {
        const response = await httpService().GET(`${process.env.REACT_APP_BASE_URL}brands/apple-phones-48?page=${page}`)
        return response.data.data
    }
)