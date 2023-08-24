import '../styles/ItemCart.css'
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

export default ItemCart