import React from 'react'
import { Link, useNavigate } from 'react-router'

const PlantCard = ({ plant }) => {
  const { name, image, category, price, id } = plant
  const navigate = useNavigate()

  return (
    <div className='card bg-base-100 shadow-sm'>
      <figure className='h-48 overflow-hidden'>
        <img className='w-full h-full object-cover' src={image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>Category: {category}</p>
        <p>Price: {price}$</p>
        <div className='card-actions justify-end'>
          {/* <Link
            state={plant}
            to={`/plant-details/${id}`}
            className='btn btn-primary'
          >
            View Details
          </Link> */}
          <button
            onClick={() => navigate(`/plant-details/${id}`, { state: plant })}
            className='btn btn-primary'
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlantCard
