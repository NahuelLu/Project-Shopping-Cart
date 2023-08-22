import { sumAll } from '../generalFunctions/functions'
import '../styles/Cart.css'
import ItemCart from './ItemCart'
import { useShopContext } from './ShopContext'

const getTotal = (itemsCart)=>{
    const total = sumAll(itemsCart.map(item => item.price* item.amount))
    const totalRounded = Math.round(total*100)/100
    return  totalRounded

}
const Cart = ()=>{
    const {itemsCart} = useShopContext()
    return(
        <div className="cart-container">
            <h2>Current Cart</h2>
            {itemsCart &&
                <>
                    <div className='items-cart-container'>{itemsCart.map(item => <ItemCart key={item.id} item={item}></ItemCart>)}</div>
                    <h2>Total: ${getTotal(itemsCart)}</h2>
                </>
            }
        </div>
    )
}

export default Cart