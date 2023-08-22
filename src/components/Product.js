import '../styles/Product.css'
import { useState } from 'react'
import ItemCart from './ItemCart'
import { useShopContext } from './ShopContext'


const alreadyExistsBookInCart =  (book, cart) => cart.some(item => item.id===book.id)
const addAmountItem = (itemCart, amountToAdd) => {return    {...itemCart,amount:itemCart.amount + amountToAdd}}
const updateCartWithBookSelected = (book, cart,amountItem) =>  cart.map( itemCart => (itemCart.id === book.id)?addAmountItem(ItemCart,amountItem):itemCart) 
const addNewBookToCart = (cart, book,amountItem) => {
    const {title,imageLinks} = book.volumeInfo
    const {amount} = book.saleInfo.listPrice
    const newBook = {title:title,id:book.id,img:imageLinks.thumbnail,price:amount,amount:amountItem}
    return cart.concat([newBook])
}
const updateCart = (cart,book,amountItem)=> {
   return alreadyExistsBookInCart(book, cart) ? updateCartWithBookSelected(book,cart,amountItem): addNewBookToCart(cart,book,amountItem)
}
const bookHasRequiredDataToShowIt = (book)=> book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && book.volumeInfo.description && book.saleInfo.listPrice

const Product = ({book})=>{
    const [buyStatus, setBuyStatus] = useState(false)
    const [amountItem, setAmountItem] = useState(0)
    const {setItemsCart} = useShopContext()
    const changeBuyState = ()=>{
        buyStatus? setBuyStatus(false) : setBuyStatus(true) 
    }
    const handlerAmountItem = (e)=>{
        setAmountItem(Number(e.currentTarget.value))
    }
    const upAmountItem = (e)=> {
        e.preventDefault();
        setAmountItem(prevAmount => prevAmount +1)
    }
    const downAmountItem = (e)=> {
        e.preventDefault();
        setAmountItem(prevAmount => prevAmount > 0?prevAmount-1:0)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setItemsCart(prevItemsCart => updateCart(prevItemsCart,book,amountItem) )
        setBuyStatus(false)
    }
    
    return(
        <>
        {bookHasRequiredDataToShowIt(book)?
            <div className='book-container'>
                <div>
                    {<img src={book.volumeInfo.imageLinks.thumbnail} alt="Book thumbnail" />}
                </div>
                <div>${book.saleInfo.listPrice.amount}</div>
                <button onClick={changeBuyState}>BUY</button>
                {buyStatus? 
                    <form className='buy-container' onSubmit={handleSubmit}>
                        <label htmlFor='itemAmount'>Amount</label>
                        <input onChange={handlerAmountItem} type='number'id='itemAmount' name='itemAmount' value={amountItem}></input>
                        <div>
                            <button onClick={upAmountItem}>+</button>
                            <button onClick={downAmountItem}>-</button>
                        </div>
                        <button>Add to Cart</button>
                    </form>
                : null}
            </div>
        :null}
        </>
    )
}

export default Product