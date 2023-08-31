import Product from "./Product"
import { useAllBooks } from "./Shop"
const ShopItems = ()=>{
    const {data:books} = useAllBooks()

    return(
        <div className="books-container">{books.map(book => <Product book={book} key={book.id} ></Product> )}</div>
    )
}

export default ShopItems