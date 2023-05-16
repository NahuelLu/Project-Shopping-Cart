import '../styles/Product.css'
import { useState } from 'react'
const Product = ({book,setItemsCart})=>{
    const [buyStatus, setBuyStatus] = useState(false)
    const [amountItem, setAmountItem] = useState(0)
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
        setItemsCart(prevItemsCart => (prevItemsCart.some(item => item.id===book.id) ? (prevItemsCart.map((item) => (item.id === book.id)?{...item,amount:item.amount + amountItem}:item)):[...prevItemsCart,...[{title:book.volumeInfo.title,id:book.id,img:book.volumeInfo.imageLinks.thumbnail,price:book.saleInfo.listPrice.amount,amount:amountItem}]]))
        setBuyStatus(false)
    }
    return(
        <>
        {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && book.volumeInfo.description?
            <div className='book-container'>
                <div>{book.volumeInfo.title}</div>
                <br></br>
                <div>
                    {<img src={book.volumeInfo.imageLinks.thumbnail} alt="Book thumbnail" />}
                </div>
                <div>${book.saleInfo.listPrice?book.saleInfo.listPrice.amount:null}</div>
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