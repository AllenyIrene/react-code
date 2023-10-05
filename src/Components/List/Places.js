import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Places = ({place}) => {
  const {photo,price,ranking,rating} = place


  return (
    <div className = "places">
   
       <img src={photo ? photo.images.large.url : "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg"}/>
       <h1>{place.name}</h1> 
       <h4>{price ? "PRICE:" : ""} {price}</h4>
       <h4>{rating ? "Rating:" : ""} {rating}</h4>
       <h4>{ranking}</h4>

      <Link to={`/PlaceDetails/${place.name}`}>View Restaurant</Link>

    </div>
  )
}

export default Places