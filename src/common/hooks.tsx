import axios from "axios"
import { useEffect, useState } from "react"

const instance = axios.create({
    baseURL: 'https://www.breakingbadapi.com/api/',
  });

export const useGetDataBy = (url: string) => {
    const [{data, isLoading, error}, setState] = useState({data: [], isLoading: false, error: ''})  
    
    useEffect(() => {        
        instance.get(url)
            .then(({data: responseData}) => {
                setState({
                    data: responseData,
                    isLoading: false,
                    error: ''
                })
            })
            .catch(() => {
                setState({
                    data: [],
                    isLoading: false,
                    error: 'something went wrong'
                })
            })
    },[url])


    return {data, isLoading, error}
}