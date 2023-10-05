import React from 'react'
import { Link } from 'react-router-dom';

const Pagination = ({postperPage, totalPlaces,paginete}) => {

    const pageNumbers = [];

    for (let i=1; i<= Math.ceil(totalPlaces/postperPage) ; i++) {
        pageNumbers.push(i)
    }


  return (
    <nav className='pagination'>
        {pageNumbers.map((numbers) =>(
            <div className='page-link'>
                <button onClick={()=>paginete(numbers)}>{numbers}</button>
                </div>
        ))}
    </nav>
  )
}

export default Pagination