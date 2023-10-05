import React from 'react'
import {BsFillTelephoneOutboundFill} from "react-icons/bs"

const Details = ({plcd,type}) => {
    const {photo,address,cuisine,hours,subcategory,address_obj,email,phone,web_url} = plcd

  return (
    <div className='details-details'>
          <img src={photo ? photo.images.large.url : "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg"}/> 
          <div className='details-2'>
       <h1>{address}</h1>
       <div className='details-btn'> {cuisine ? "FOODS ON THE MENU": ""} <br></br> {cuisine ? cuisine.map((food) => (
        <button>{food.name}</button>
       ))
      :"" }</div>
   
       <p>{email? "Email : " : ""} {email}</p>
       <p>{phone ? <BsFillTelephoneOutboundFill/> : ""} : {phone}</p> 
      <button> {web_url ? "Visit the hotel" : ""}<a href={web_url}></a></button>
      <button>{type === "hotels" ? "Book Hotel" : "Reserve"}</button>
          </div>
    </div>
  )
}

export default Details