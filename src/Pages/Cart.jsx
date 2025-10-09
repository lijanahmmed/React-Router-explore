import { use } from 'react'
import { CartContext } from '../Providers/CartContext'

const Cart = () => {
  const { cart, setCart } = use(CartContext)
  return (
    <div>
      {cart.map(plant => (
        <p key={plant.id}>{plant.name}</p>
      ))}
    </div>
  )
}
export default Cart
