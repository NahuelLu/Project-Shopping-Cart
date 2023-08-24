import { render, screen } from "@testing-library/react"
import Bar from "../components/Bar"
describe("Test for Bar component",()=>{

    test("Render heading correctly",()=>{
        const amount = 10
            render(<Bar amount={amount}/>)
            const amountContainer = screen.getByRole("heading")
            expect(amountContainer).toBeInTheDocument()
    })
    test("Render correctly test from amount",()=>{
        const amount= 20
        render(<Bar amount={amount}/>)
        const amountContainer = screen.getByRole("heading",{level:4})
        const text = amountContainer.innerHTML
        expect(text).toEqual("Items selected: 20")
    })
})
