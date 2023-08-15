import '../styles/Nav.css'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { ShopProvider } from "./ShopContext";

const Nav = ()=>{
    return (
        <>
        <header>
            <div className='title'>
                <h1>Shopping Cart</h1>
            </div>
            <nav>
                <div><h2><Link to="/Homepage">Homepage</Link></h2></div>
                <div><h2><Link to="/Shop">Shop</Link></h2></div>
            </nav>
        </header>
        <ShopProvider><Outlet></Outlet></ShopProvider>
        </>
    )
}

export default Nav