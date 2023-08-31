import { act, render, screen } from "@testing-library/react"
import Product from "../components/Product"
import userEvent from '@testing-library/user-event'

const goodBook = {
    "id": "hvTAEAAAQBAJ",
    "volumeInfo": {
      "title": "No quiero perderme nada",
      "imageLinks": {
        "thumbnail": "http://books.google.com/books/content?id=hvTAEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "description": "Hola"
    },
    "saleInfo": {
      "listPrice": {
        "amount": 1469.99,
      },
    },
}
jest.mock("../components/ShopContext", () => {
    return {
        useShopContext: ()=> ({
            setItemsCart: ()=>{}
        })
    }
  }
);
jest.mock("@fortawesome/react-fontawesome", ()=>{
    return {
        FontAwesomeIcon: ({icon})=> <div>{icon}</div>
    }
})
jest.mock("@fortawesome/free-solid-svg-icons",()=>{
    return{
        faCartPlus: "faCartPlusIcon",
        faMinus : "faMinusIcon",
        faPlus : "faPlusIcon"
    }
})
jest.mock('react-router-dom',()=>{
    return {
      Link : ({to})=> <a>Url:{to}</a>
    }
})
describe("Tests for Product component",()=>{
    
    test("Render successfully book",()=>{
        const {container}=render(<Product book={goodBook} />)
        expect(container).toMatchSnapshot()
    })
    test("Don't render book because doesn't has imageLinks",()=>{
        const book = {
            "id": "hvTAEAAAQBAJ",
            "volumeInfo": {
              "title": "No quiero perderme nada",
              "description": "Hola"
            },
            "saleInfo": {
              "listPrice": {
                "amount": 1469.99,
              },
            },
        }
        const {container} = render(<Product book={book} />)
        expect(book).not.toHaveProperty('volumeInfo.imageLinks.thumbnail');
        expect(container).toMatchSnapshot()
    })
    test("Don't render book because doesn't have a description",()=>{
        const book = {
            "id": "hvTAEAAAQBAJ",
            "volumeInfo": {
              "title": "No quiero perderme nada",
              "imageLinks": {
                "thumbnail": "http://books.google.com/books/content?id=hvTAEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              }
            },
            "saleInfo": {
              "listPrice": {
                "amount": 1469.99,
              },
            },
        }
        const {container} = render(<Product book={book} />)
        expect(book).not.toHaveProperty('volumeInfo.description');
        expect(container).toMatchSnapshot()
    })
    test("Don't render book because doesn't have a price",()=>{
        const book = {
            "id": "hvTAEAAAQBAJ",
            "volumeInfo": {
              "title": "No quiero perderme nada",
              "imageLinks": {
                "thumbnail": "http://books.google.com/books/content?id=hvTAEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "description": "Hola"
            },
            "saleInfo": {
            },
        }
        const {container} = render(<Product book={book} />)
        expect(book).not.toHaveProperty('saleInfo.listPrice');
        expect(container).toMatchSnapshot()
    })
    test("Render buy UI when click button",async()=>{
        const {container}=render(<Product book={goodBook} />)
        const user = userEvent.setup()
        const button = screen.getByRole("button",{name:'buy'})
        await act(async  ()=>{
            await user.click(button)
        })
        expect(container).toMatchSnapshot()
    })
    test("Up 1 to input amount",async()=>{
        const user = userEvent.setup()
        const {container}=render(<Product book={goodBook} />)
        const button = screen.getByRole("button",{name:'buy'})
        await act(async  ()=>{
            await user.click(button)
        })
        const btnUp = screen.getByRole("button",{name:"upAmount"})
        await act(async  ()=>{
            await user.click(btnUp)
        })
        const amount = container.querySelector("#itemAmount").value
        expect(amount).toBe("1")
        expect(container).toMatchSnapshot()
    })
    test("Up 1 then down 1 amount is 0",async()=>{
        const user = userEvent.setup()
        const {container}=render(<Product book={goodBook} />)
        const button = screen.getByRole("button",{name:'buy'})
        await act(async  ()=>{
            await user.click(button)
        })
        const btnUp = screen.getByRole("button",{name:"upAmount"})
        const btnDown = screen.getByRole("button",{name:"downAmount"})
        await act(async  ()=>{
            await user.click(btnUp)
            await user.click(btnDown)
        })
        const amount = container.querySelector("#itemAmount").value
        expect(amount).toBe("0")
    })
    
})