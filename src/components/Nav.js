import '../styles/Nav.css'
import { Outlet } from 'react-router-dom'
import { ShopProvider } from "./ShopContext";
import {faCartShopping,faBook,faHouse} from '@fortawesome/free-solid-svg-icons'
import Section from './Section';
const Nav = ()=>{
    return (
        <>
        <header>
            <div className='title'>
                <h1>Shopping Cart</h1>
            </div>
            <nav>
                <Section icon={faHouse} name="Homepage"></Section>
                <Section icon={faBook} name="Shop"></Section>
                <Section icon={faCartShopping} name="Cart"></Section>
            </nav>
        </header>
        <ShopProvider><Outlet></Outlet></ShopProvider>
        </>
    )
}

export default Nav  