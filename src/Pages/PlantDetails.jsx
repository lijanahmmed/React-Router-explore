// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import { useContext } from "react";
import { useLocation } from "react-router";
import { CartContext } from "../Providers/CartContext";

const PlantDetails = () => {
  const { setCart } = useContext(CartContext);

  const location = useLocation();
  const { name, description, category, price, image } = location?.state || {};
  return (
    <div className="card bg-base-100 max-w-5xl mx-auto shadow-sm">
      <figure className="h-48 overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Category: {category}</p>
        <p>Price: {price}$</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => setCart((prv) => [...prv, location?.state])}
            className="btn btn-primary"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
