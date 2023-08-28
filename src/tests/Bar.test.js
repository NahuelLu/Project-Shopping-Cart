import { render, screen } from "@testing-library/react"
import Bar from "../components/Bar"
describe("Test for Bar component",()=>{

    test("Renders successfully",()=>{
        const {container}= render(<Bar/>)
        expect(container).toMatchSnapshot()
    })
    test("Renders succesfully 20 amount in heading",()=>{
        const amount= 20
        const {container} = render(<Bar amount={amount}/>)
        expect(container).toMatchSnapshot()
    })
})
