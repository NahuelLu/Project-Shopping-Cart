import '../styles/Cart.css'
import ItemCart from './ItemCart'
import { useShopContext } from './ShopContext'

const getTotal = (itemsCart)=>{
    return  itemsCart
        .map(item => item.price * item.amount)
        .reduce((accumulator, current) => current + accumulator,0)
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