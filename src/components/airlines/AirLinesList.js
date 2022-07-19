import React from 'react'
import useFetchData from '../hooks/useFetchData'

const AirLinesList = () => {
  const [isLoading,isError,data] = useFetchData("https://api.instantwebtools.net/v1/airlines")
  console.log(data)
  return (
    <div className='container'>
      <header>
        <div className='header'>
          <h2>Airline List API</h2>
        </div>
      </header>
      <div className='main'>
      { 
        isError &&  <div className='error'>          
          <span>Opps! Something went wrong</span>
        </div>
      } 

      { 
        isLoading && 
        <div className='loading'>
          <span>Please wait...</span>
        </div>
      }

      { 
        !isLoading && !isError && data.length === 0 &&
        <div className='nodata'>
          <span>No record to display</span>
        </div>
      }

      {
        !isLoading && data.length > 0 &&
        <div className='data-list'>
          {
            data.map((airline,index) => {
              return <div className='data-item' key={index}>
                <div className='data-item--flag'>
                  {/* <img src={airline.logo} alt={airline.country} className='data-item--logo'/> */}
                </div>
                <div className='data-item--details'>
                  <span>{airline.name}</span>
                </div>
              </div>
            })
          }
          
        </div>
      }
      </div>
    </div>    
  )
}

export default AirLinesList