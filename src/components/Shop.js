import Bar from "./Bar"
import '../styles/Shop.css'
import {useEffect} from "react"
import {  Outlet } from "react-router-dom"
import { useShopContext } from "./ShopContext"

const Shop = ()=>{
    const {amountItems,setAmountItems,books,setBooks,itemsCart,setItemsCart} = useShopContext()
    const fetchingData = async ()=>{
        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=inauthor:Anna Pólux")
        const data = await response.json()
        const items = data.items
        return items
    }

    useEffect(()=>{
        const data = fetchingData()
        data.then(items => {
            setBooks(items)
        })
        console.log("Component was mounted!")
        return ()=>{console.log("Component was unmounted!")}
    },[])


    useEffect(()=>{
        setAmountItems( () => 
            itemsCart
                    .map(item => item.amount)
                    .reduce((accumulator, currentAmount) => currentAmount + accumulator,0)
        )
    },[itemsCart])

    return(
        <main className="shop-container">
        <Bar amount={amountItems}></Bar>
        <Outlet context={[itemsCart,books,setItemsCart]}></Outlet>
        </main>
    )
}

export default Shop