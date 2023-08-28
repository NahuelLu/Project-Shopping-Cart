import '../styles/Product.css'
import { useState} from 'react'
import { useShopContext } from './ShopContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const alreadyExistsBookInCart =  (book, cart) => cart.some(item => item.id===book.id)
const addAmountItem = (itemCart, amountToAdd) => {return    {...itemCart,amount:itemCart.amount + amountToAdd}}
const updateCartWithBookSelected = (book, cart,amountItem) =>  cart.map( itemCart => (itemCart.id === book.id)?addAmountItem(itemCart,amountItem):itemCart) 
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
    const [amountBook, setAmountBook] = useState(0)
    const {setItemsCart} = useShopContext()

    const changeBuyState = ()=>{
        buyStatus? setBuyStatus(false) : setBuyStatus(true) 
    }
    const handlerAmountBook = (e)=>{
        setAmountBook(Number(e.currentTarget.value))
    }
    const upAmountBook = (e)=> {
        e.preventDefault();
        setAmountBook(prevAmount => prevAmount + 1)
    }
    const downAmountBook = (e)=> {
        e.preventDefault();
        setAmountBook(prevAmount => prevAmount > 0?prevAmount-1:0)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setItemsCart(prevItemsCart => updateCart(prevItemsCart,book,amountBook) )
        setBuyStatus(false)
    }
    
    return(
        <>
        {bookHasRequiredDataToShowIt(book) &&
            <div className='book-container'>
                <div>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book thumbnail" />
                </div>
                <div>${book.saleInfo.listPrice.amount}</div>
                <button onClick={changeBuyState} aria-label='buy'>
                    <FontAwesomeIcon size='2x'icon={buyStatus?faMinus:faPlus} />
                </button>
                {buyStatus && 
                    <form className='buy-container' onSubmit={handleSubmit}>
                        <label htmlFor='itemAmount'>Amount</label>
                        <input onChange={handlerAmountBook} type='number'id='itemAmount' name='itemAmount' value={amountBook}></input>
                        <div className='buttons-container'>
                            <button onClick={downAmountBook} aria-label='downAmount'>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <button>
                            <FontAwesomeIcon size='2x'icon={faCartPlus} />
                            </button>
                            <button onClick={upAmountBook} aria-label='upAmount'>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </form>
                }
            </div>
        }
        </>
    )
}
Product.propTypes ={
    book : PropTypes.object
}

export default Product