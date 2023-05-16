import '../styles/Cart.css'
const Cart = ({itemsCart})=>{
    return(
        <div className="cart-container">
            <h2>Current items</h2>
            {itemsCart?itemsCart.map(item => JSON.stringify(item)):null}
        </div>
    )
}
export default Cart