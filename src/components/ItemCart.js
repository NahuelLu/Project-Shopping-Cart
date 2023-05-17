import '../styles/ItemCart.css'
const ItemCart = ({item})=>{
    return(
        <div className="item-cart">
            <h3>{item.title}</h3>
            <img src={item.img}></img>
            <h3>${item.price}</h3>
            <h3>{item.amount}</h3>
        </div>
    )
}

export default ItemCart