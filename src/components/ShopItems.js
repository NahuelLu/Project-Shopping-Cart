import { useOutletContext } from "react-router-dom"
import Product from "./Product"
import { useShopContext } from "./ShopContext"

const ShopItems = ()=>{
    const {books,setItemsCart} = useShopContext()
    return(
        <div className="books-container">{books.map(book => <Product book={book} key={book.id} setItemsCart={setItemsCart}></Product> )}</div>
    )
}

export default ShopItems