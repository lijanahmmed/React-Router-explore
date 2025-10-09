import React, { useState } from 'react'
import { Outlet, useNavigation } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import LoadingSpinner from '../Components/LoadingSpinner'
import { CartContext } from '../Providers/CartContext'

const RootLayout = () => {
  const [cart, setCart] = useState([])
  const navigation = useNavigation()
  console.log(navigation.state)
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Navbar />
      {navigation?.state === 'loading' ? (
        <LoadingSpinner />
      ) : (
        <main className='min-h-[calc(100vh-285px)]'>
          <Outlet />
        </main>
      )}
      <Footer />
    </CartContext.Provider>
  )
}

export default RootLayout
