import React from 'react'
import { Link } from 'react-router-dom'
import {Autocomplete} from '@react-google-maps/api'
import SearchIcons from './SearchIcons'

const Header = ({OnSubmit,input,setInput}) => {

   return (
   
  <div className='header nav'>
        <div className='header-details'>
                <h5>TRAVEL ADVISER</h5>
                <div  className='details-details'>
                    <p>NEW PLACES TO VISIT</p>  
                </div>
        </div>
        <section className='nav'>
        <Link to="/">Home</Link>
        <Link to="/PlaceDetails">PlaceDetails</Link>
        </section>
        
    </div>
   
  
  )
}

export default Header