import React from 'react'
import List from './List/List'
import Map from './Map/Map'

const Home = ({places,loading,postperPage,totalPlaces,paginete, type,setType,rating,setRating}) => {
  return (
    <section className='home'>
        <section className='home-list'>
            <List places={places} loading={loading} postperPage={postperPage} 
            totalPlaces={totalPlaces} paginete={paginete} 
            type={type} setType={setType} rating={rating} setRating={setRating}
            />
        </section>
      
    </section>
  )
}

export default Home