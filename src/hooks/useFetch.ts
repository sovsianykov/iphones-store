import {useAppDispatch} from "./redux";
import {useEffect} from "react";


export const useFetch = (url:string,callback:any) =>{
    const dispatch = useAppDispatch();
    useEffect(() => {
       dispatch(callback(url))
    },[dispatch,url,callback])
}