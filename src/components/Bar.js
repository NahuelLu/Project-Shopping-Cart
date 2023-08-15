import '../styles/Bar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Bar = ({amount})=>{

    return (
        <nav className='sticky-bar'>
            <h4>Items selected: {amount}</h4>
        </nav>
    )
}

export default Bar