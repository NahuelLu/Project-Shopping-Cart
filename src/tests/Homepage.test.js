import { render,screen } from "@testing-library/react"
import Homepage from "../components/Homepage"

const images = ['ex1.jpg', 'ex2.jpg','ex3.jpg'];

jest.mock("../components/ShopContext",()=>{
    return{
        useShopContext: ()=>({images:images})
    }
})
test("Render Homepage correctly!",()=>{
    render(<Homepage></Homepage>)
    const text = screen.getByRole('heading',{name:"Some random Fan Arts of Michaeng!"})
    expect(text).toBeInTheDocument()
})
test("Render Homepage with correct length of images",()=>{
    render(<Homepage />)
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toEqual(images.length)
})
