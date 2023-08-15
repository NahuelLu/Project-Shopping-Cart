import '../styles/Homepage.css'
import Image from './Image'
import Img from '../imgs/img.jpg'
import Img1 from '../imgs/img1.jpg'
import Img2 from '../imgs/img2.jpg'
import Img3 from '../imgs/img3.jpg'
import Img4 from '../imgs/img4.jpg'
import Img5 from '../imgs/img5.jpg'
import { useEffect } from 'react'


const Homepage = ()=>{
    useEffect(()=>{
        return ()=>{console.log("Component was unmounted!")}
    },[]
    )
    
    return(
        <main className="homepage">
            <div><h2>Some random Fan Arts of Michaeng!</h2></div>
            <div className='images-container'>
                <Image path={Img} ></Image>
                <Image path={Img1} ></Image>
                <Image path={Img2} ></Image>
                <Image path={Img3} ></Image>
                <Image path={Img4} ></Image>
                <Image path={Img5} ></Image>
            </div>
        </main>
    )
}

export default Homepage