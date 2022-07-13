import React from 'react'
import useFetchData from '../hooks/useFetchData'

const AirLinesList = () => {
  const [isLoading,isError,data] = useFetchData("https://api.instantwebtools.net/v1/airlines")
  console.log(data)
  return (
    <div className='container'>
      <div className='header'>
        <h2>AirLine List API</h2>
      </div> 
      <div className='error'></div>
      <div className='loading'></div>
      <div className='data-list'></div>


        {/* { isLoading && <div>Please wait...</div> }
        { isError && <div>{isError}</div> }
        { !isLoading && !isError && <pre>{JSON.stringify(data)}</pre> } */}
    </div>    
  )
}

export default AirLinesList