import { useEffect, useState } from 'react'

const useFetchData = (url) => {
    const [isLoading,setIsLoading] = useState(true)
    const [isError,setError] = useState("")
    const [data,setData] = useState([])

    useEffect(() => {
        fetch(url,{
            mode:"cors"
        })
        .then(response => response.json())
        .then(data => {
            setIsLoading(false)
            setData(data)
        }).catch(error => {
            setIsLoading(false)
            setError(error.message)
        })
    },[url])

  return [isLoading,isError,data]
}

export default useFetchData