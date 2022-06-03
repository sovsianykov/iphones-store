
import {createAsyncThunk} from "@reduxjs/toolkit";

import httpService from '../../../api/httpService'


export const fetchPhoneDetail = createAsyncThunk(
    'phoneDetail/fetch',
    async (url:string) => {
      const uri = `${url.substring(0, 4)}s${url.substring(4)}`
        const response = await httpService().GET(uri)
        return response.data.data
    }
)
