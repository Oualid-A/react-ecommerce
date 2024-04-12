import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetch = ({api}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);
    useEffect(()=>{
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const response = await axios.get(api)
                const data = await response?.data
                setApiData(data)
                setIsLoading(false)
            } catch (error) {
                setServerError(error)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [api])
 
    return {isLoading, apiData, serverError}
}

export default useFetch
