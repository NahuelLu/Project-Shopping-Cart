import Product from "./Product"
import { useShopContext } from "./ShopContext"
import { useAllBooks } from "./Shop"
const ShopItems = ()=>{
    const {setItemsCart} = useShopContext()
    const {data:books} = useAllBooks()
    return(
        <div className="books-container">{books.map(book => <Product book={book} key={book.id} setItemsCart={setItemsCart}></Product> )}</div>
    )
}

export default ShopItems