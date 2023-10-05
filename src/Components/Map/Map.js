import React, { useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import axios from 'axios'
import { FetchData, options } from './FetchMap'
import image2 from "../Assets/IMAGES/h6.jpeg"
import image3 from "../Assets/IMAGES/h1.jpeg"
import image4 from "../Assets/IMAGES/h3.jpeg"
import image5 from '../Assets/IMAGES/h4.jpeg'

const Map = () => {

 

 

  useEffect (()=>{


  },)
  
  
  return (
    <div className='map-container'>
    {/* <GoogleMapReact 
        bootstrapURLKeys={{key:""}} defaultCenter={coordinates} 
        defaultZoom = {14}
        center={coordinates}
        margin = {[50,50,40,50]}
        options={""}
        onChange={""}
        onChildClick = {""}
      >
  </GoogleMapReact> */} 
  <img src={image2}/>
  <img src={image3}/>
  <img src={image4}/>
  <img src={image5}/>


    </div>
  )
}

export default Map