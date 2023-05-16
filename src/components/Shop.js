import Bar from "./Bar"
import '../styles/Shop.css'
import { useState,useEffect} from "react"
import Product from "./Product"
import Cart from "./Cart"
const Shop = ({setProducts,products})=>{
    const [amountItems, setAmountItems ] = useState(0)
    const [books, setBooks] = useState([])
    const [itemsCart, setItemsCart] = useState([])
    const [showCartStatus, setShowCartStatus] = useState(false)
    useEffect(()=>{
        const fetchingData = async ()=>{
            const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=inauthor:Anna Pólux");
            const data = await response.json()
            const items = data.items
            return items
        }
        fetchingData().then(items => {
            console.log(items)
            setBooks(items)
        })
    },[])
    useEffect(()=>{
        setAmountItems(prevAmount => itemsCart.map(item => item.amount).reduce((accumulator, currentAmount) => currentAmount + accumulator,0))
        console.log(itemsCart)
    },[itemsCart])
    return(
        <main className="shop-container">
            <Bar amount={amountItems} setShowCartStatus={setShowCartStatus}></Bar>
            {showCartStatus?<Cart itemsCart={itemsCart}></Cart>:null}
            {books ? <div className="books-container">{books.map(book => <Product book={book} key={book.id} setItemsCart={setItemsCart}></Product> )}</div>:null}
        </main>
    )
}

export default Shop