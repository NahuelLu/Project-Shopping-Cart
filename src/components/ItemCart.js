import '../styles/ItemCart.css'
import PropTypes from 'prop-types'
const ItemCart = ({item})=>{
    return(
        <div className="item-cart">
            {item &&
            <>
            <img src={item.img} alt={item.title}></img>
            <h3>${item.price}</h3>
            <h3>{item.amount}</h3>
            </>}
        </div>
    )
}

ItemCart.propTypes = {
    item: PropTypes.object
}
export default ItemCart