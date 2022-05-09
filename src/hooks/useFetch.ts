import {useAppDispatch} from "./redux";
import {useEffect} from "react";
import {fetchPhones} from "../store/thunk";


export const useFetch = (page:string) =>{
    const dispatch = useAppDispatch();
    useEffect(() => {
       dispatch(fetchPhones(page))
    },[dispatch,page])
}