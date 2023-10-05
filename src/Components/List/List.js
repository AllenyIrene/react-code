import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination'
import Places from './Places'

const List = ({places,loading,postperPage,totalPlaces,paginete,type,setType,rating,setRating}) => {

 
 /*
  if(loading)
  {
    return <h2>Page is loading</h2>
  }
  */
  
  // FUNCTION TO GET THE SELECT ITEMS AND BE ABLE TO MOVE FROM HOTELS, RESTAURANT, ATTRACTIONS
 
  return (
    <div className='main-list'>
      <section className='list' >
      <h1>RESTAURANTS, HOTELS AND ATTRACTIONS <br></br> AROUND YOU</h1>
      
      <label>Type :
        <select value={type} onChange={(e) =>setType(e.target.value)}>
          <option value="restaurants">RESTAURANTS</option>
          <option value="hotels">HOTELS</option>
          <option value="attractions">ATTRACTIONS</option>
        </select>
        </label>
       
      
      </section>
      <section className='list-details'>
        <h5>{type} near me:</h5>
        <div className='list-places'>
        {places ?.map((place,index) => (
        <div key={index}>
          <Places place={place} />
        </div>
      ))}
   
        </div>
        <div className='center-pagination'> 
          <Pagination postperPage={postperPage} totalPlaces= {totalPlaces} paginete={paginete} />
          </div>
       
      </section>
    </div>
  )
}

export default List