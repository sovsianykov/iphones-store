import {useAppDispatch} from "./redux";
import {useEffect} from "react";
import {fetchPhones} from "../store/thunk";


export const useFetch = (url:string,callback:any) =>{
    const dispatch = useAppDispatch();
    useEffect(() => {
       dispatch(callback(url))
    },[dispatch,url])
}