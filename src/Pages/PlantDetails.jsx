// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import { useContext, useState } from 'react'
import { useLoaderData, useLocation, useParams } from 'react-router'
import { CartContext } from '../Providers/CartContext'

const PlantDetails = () => {
  const { cart, setCart } = useContext(CartContext)

  // const { id } = useParams()
  // console.log(id)
  // const [plant, setPlant] = useState({})
  // useEffect(() => {
  //   // fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
  //   //   .then(res => res.json())
  //   //   .then(data => setPlant(data?.plants))
  //   // fetch data using axios
  //   // axios(`https://openapi.programming-hero.com/api/plant/${id}`).then(data =>
  //   //   setPlant(data.data.plants)
  //   // )
  // }, [id])
  const location = useLocation()

  // const { data } = useLoaderData()
  console.log(location?.state)
  const { name, description, category, price, image } = location?.state || {}
  return (
    <div className='card bg-base-100 max-w-5xl mx-auto shadow-sm'>
      <figure className='h-48 overflow-hidden'>
        <img className='w-full h-full object-cover' src={image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{description}</p>
        <p>Category: {category}</p>
        <p>Price: {price}$</p>
        <div className='card-actions justify-end'>
          <button
            onClick={() => setCart(prv => [...prv, location?.state])}
            className='btn btn-primary'
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlantDetails
