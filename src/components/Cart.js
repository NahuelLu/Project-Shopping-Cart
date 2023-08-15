import '../styles/Cart.css'
import { useOutletContext } from 'react-router-dom'
import ItemCart from './ItemCart'
import { useShopContext } from './ShopContext'

const Cart = ()=>{
    const {itemsCart} = useShopContext()
    return(
        <div className="cart-container">
            <h2>Current Cart</h2>
            <div className='items-cart-container'>{itemsCart?itemsCart.map(item => <ItemCart key={item.id} item={item}></ItemCart>):null}</div>
            {itemsCart?<h2>Total: ${itemsCart.map(item => item.price * item.amount).reduce((accumulator, current) => current + accumulator,0)}</h2>:null}
        </div>
    )
}

export default Cart