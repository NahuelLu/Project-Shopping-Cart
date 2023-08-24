import { render } from "@testing-library/react";
import ShopItems from "../components/ShopItems";
const books = [
    {
        title:"book1",
        id:1
    },
    {
        title:"book2",
        id:2
    }
]
jest.mock("../components/Shop",()=>{
    return {
        useAllBooks: ()=>( {data:books})
    }

})
jest.mock("../components/Product",()=>{
    return ({book})=> <div className="book-container">{book.title}</div> 
})
describe("Test for ShopItems component",()=>{
    test("Component was rendered succesfully",()=>{
        render(<ShopItems />)   
    })
    test("Component received correct length of books",()=>{
        render(<ShopItems />)
        const books = document.querySelectorAll(".book-container")
        expect([...books].length).toEqual(2)
    })
})