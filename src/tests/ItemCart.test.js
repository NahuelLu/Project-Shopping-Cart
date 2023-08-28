import { render, screen } from "@testing-library/react";
import ItemCart from "../components/ItemCart";

describe("Tests for ItemCart component",()=>{
    test("ItemCart component was rendered successfully without item information",()=>{
        render(<ItemCart />)
    })
    test("ItemCart component was rendered successfully with item information",()=>{
        const itemExample = {
            title: "Item1",
            img: "img1.png",
            price: 200,
            amount: 2
        }
        render(<ItemCart item={itemExample} />)
        const img = screen.getByRole("img")
        const priceWithSign = `\$${itemExample.price}`
        const amountString = itemExample.amount.toString()
        const price = screen.getByRole("heading",{level:3,name:priceWithSign}).innerHTML
        const amount = screen.getByRole("heading",{level:3,name:amountString}).innerHTML
        expect(img).toBeInTheDocument()
        expect(price).toEqual(priceWithSign)
        expect(amount).toEqual(amountString)
    })
})