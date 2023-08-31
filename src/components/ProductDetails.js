import { useParams } from "react-router-dom"
import { useAllBooks } from "./Shop"
import '../styles/ProductDetails.css';

import PrevButton from "./PrevButton"
const BookInfo = ({ book }) => {
    const saleInfo = book.saleInfo;

    return (
        <div className="general-container">
        <PrevButton to="/shop"></PrevButton>
        <div className="book-details-container">
            <div className="book-thumbnail">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Thumbnail" />
            </div>
            <div className="book-details">
            <h2 className="book-title">{book.volumeInfo.title}</h2>
            <p className="book-authors">By {book.volumeInfo.authors.join(', ')}</p>
            <p className="book-publisher">{book.volumeInfo.publisher}</p>
            <p className="book-published-date">Published: {book.volumeInfo.publishedDate}</p>
            <p className="book-description">{book.volumeInfo.description}</p>
            <a className="book-link" href={book.volumeInfo.infoLink}>More info</a>
            {saleInfo && saleInfo.saleability === 'FOR_SALE' && (
            <div className="book-price">
                <p>Price: {saleInfo.listPrice.amount} {saleInfo.listPrice.currencyCode}</p>
                <a className="book-buy-link" href={saleInfo.buyLink}  >
                Buy Now in official page
                </a>
            </div>
            )}
            </div>
        </div>
      </div>
    );
};
const ProductDetails = ()=>{
    const {bookId} = useParams()
    const {data:books} = useAllBooks()

    return(
        <BookInfo book={books.find(item => item.id== bookId)}></BookInfo>
    )
}
export default ProductDetails