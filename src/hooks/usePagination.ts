import {useState} from "react";


export const usePagination = (totalPages:number) => {


    const [ currentPage, setCurrentPage] = useState(1)

    const dispPage =( pageNumber:number )=> {
        setCurrentPage(pageNumber)
    }

return [
    totalPages,
    currentPage,
    dispPage
]
}