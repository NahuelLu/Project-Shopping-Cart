import '../styles/Bar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Bar = ({amount})=>{

    return (
        <nav className='sticky-bar'>
            <h4>Items selected: {amount}</h4>
            <div style={{display:'flex',gap:'20px'}}>
                <div><h2><Link to="/shop/cart">Go to the Cart</Link></h2></div>
                <div><h2><Link to="/shop/items">Go to the Shop</Link></h2></div>
            </div>
        </nav>
    )
}

export default Bar