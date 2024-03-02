import React from 'react'
import './SideCard.css'
const SideCard = ({items}) => {

  return (
    <div className='d-flex w-100 sidebar-container'>
      <div className="sidebar-image ">
      <a href={`/product/${items?.key}`}>
      <img src={items?.img} alt="img"
        className='img-fluid ' />
      </a>
      </div>
      <div className="sidebar-content w-75">
       <a href={`/product/${items?.key}`}>{items?.name}</a>
        <h4>${items?.price}</h4>
        <button className="btn btn-outline-primary">add to cart</button>
      </div>
    </div>
  )
}

export default SideCard
