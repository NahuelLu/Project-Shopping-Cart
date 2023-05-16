import '../styles/Bar.css'
import { useState } from 'react'
const Bar = ({amount,setShowCartStatus})=>{
    const handleClick = (e) =>{
        setShowCartStatus(prevStatus => prevStatus?false: true)
    }
    return (
        <div>
            <nav className='sticky-bar'>
                <h4>Amount of Items to buy: {amount}</h4>
                <button onClick={handleClick}>Checkout Cart</button>
            </nav>
        </div>
    )
}

export default Bar