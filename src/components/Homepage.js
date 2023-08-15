import '../styles/Homepage.css'
import Image from './Image'
import { useEffect } from 'react'
import { useShopContext } from './ShopContext'


const Homepage = ()=>{
    const {images} = useShopContext()
    useEffect(()=>{
        return ()=>{console.log("Component was unmounted!")}
    },[]
    )

    return(
        <main className="homepage">
            <div><h2>Some random Fan Arts of Michaeng!</h2></div>
            <div className='images-container'>
                {images.map((url,index) => <Image key={index} path={url}></Image>)}
            </div>
        </main>
    )
}

export default Homepage