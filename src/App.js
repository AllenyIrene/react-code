import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import "./index.css"

import PlaceDetails from "./Components/PlaceDetails/PlaceDetails";

import { getPlacesDat } from "./Api/ApiIndex";

function App() {

  const [places, setPlaces] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postperPage] = useState(6)
  const [type, setType] = useState("restaurants")
  const [rating, setRating] = useState("restaurant")
  const [input, setInput] = useState("")


      useEffect(()=>{ 
        setLoading(true)
       getPlacesDat(type)
      .then((data) =>{
      setPlaces(data)
      setLoading(false)
      console.log(data)
      })
  },[type])


  // GET CURRENT POST
  const indexOfLastPost = currentPage * postperPage
  const indexOfFirstPost = indexOfLastPost - postperPage
  const currentPlaces = places.slice(indexOfFirstPost,indexOfLastPost)

  // CHANGE PAGE NUMBER IN PAGINATION
  const paginete = (pagenumber) =>setCurrentPage(pagenumber)

  // SEARCHING FOR A RESTAURANT, HOTEL

  const OnSubmit = (e) =>{
    e.preventDefault ()
  }

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Layout OnSubmit={OnSubmit} input={input} setInput={setInput}/>}>
        <Route index element = {<Home places={currentPlaces} loading= {loading} 
        postperPage={postperPage} totalPlaces={places.length} paginete={paginete} 
        type={type} setType={setType} rating={rating} setRating={setRating}
        />}/>
        <Route path="/PlaceDetails/:id" element = {<PlaceDetails places={places} type={type}/>}/>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
