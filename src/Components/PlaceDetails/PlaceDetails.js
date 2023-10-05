import React from 'react'
import { useParams } from 'react-router-dom'
import Details from './Details'

const PlaceDetails = ({places,type}) => {

  const {id} = useParams()

  const placeD = places.filter((place) => place.name === id)
  console.log(placeD)

  return (
    <div>

      {placeD.map((plcd)=>{
        return <div>
          <Details plcd={plcd} type={type}/>
          </div>
      })}
        
      
    </div>
  )
}

export default PlaceDetails