import { useOutletContext } from "react-router-dom"
import Product from "./Product"

const ShopItems = ()=>{
    const [itemsCart,books,setItemsCart] = useOutletContext()
    return(
        <div className="books-container">{books.map(book => <Product book={book} key={book.id} setItemsCart={setItemsCart}></Product> )}</div>
    )
}

export default ShopItems