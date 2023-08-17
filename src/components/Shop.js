import Bar from "./Bar"
import '../styles/Shop.css'
import {useEffect} from "react"
import { useShopContext } from "./ShopContext"
import ShopItems from "./ShopItems"
import {useQuery } from '@tanstack/react-query'

const getBooks = async ()=>{
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=inauthor:Anna Pólux")
    if (!response.ok) {
        throw new Error('Network response was not ok')
      }
    if(response.ok){
        console.log("Requesting")
    }
    const data = await response.json()
    const items = data.items
    return items
}
export function useAllBooks (){
    return useQuery({ queryKey: ['book'], queryFn: getBooks })
}

const sumAllItemsPrices = (itemsCart) => {
    return itemsCart
        .map(item => item.amount)
        .reduce((accumulator, currentAmount) => currentAmount + accumulator,0)
}
const Shop = ()=>{
    const {amountItems,setAmountItems,itemsCart} = useShopContext()

    const {isError, isLoading} = useQuery({ queryKey: ['book'], queryFn: getBooks })
    useEffect(() => {
        console.log("Because component was mounted again then show this msg AGAIN not fetching again!!")
    }, [])
    useEffect(()=>{
        console.log("Shop component was mounted!")
        return ()=>{console.log("Shop Component was unmounted!")}
    },[])

    useEffect(()=>{
        setAmountItems( () => sumAllItemsPrices(itemsCart))
    },[itemsCart,setAmountItems])

    return(
        <main className="shop-container">
            <Bar amount={amountItems}></Bar>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : isError ? (
                <h1>Error loading data</h1>
            ) : (
                <ShopItems></ShopItems>
            )}
        </main>
    )
}

export default Shop