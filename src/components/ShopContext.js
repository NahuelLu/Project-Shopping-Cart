import { createContext, useContext, useEffect, useState } from "react";
import Img from '../imgs/img.jpg'
import Img1 from '../imgs/img1.jpg'
import Img2 from '../imgs/img2.jpg'
import Img3 from '../imgs/img3.jpg'
import Img4 from '../imgs/img4.jpg'
import Img5 from '../imgs/img5.jpg'

const ShopContext = createContext();

export function useShopContext() {
  return useContext(ShopContext);
}

export function ShopProvider({ children }) {
    const [amountItems, setAmountItems] = useState(0);
    const [books, setBooks] = useState([]);
    const [itemsCart, setItemsCart] = useState([]);
    const [images, setImages] = useState([])

    const imagesUrl = [Img,Img1,Img2,Img3,Img4,Img5]

    useEffect(()=>{
        setImages(imagesUrl)
    },[])

    const contextValue = {
        amountItems,
        setAmountItems,
        itemsCart,
        setItemsCart,
        images
    };

    return (
        <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
    );
}