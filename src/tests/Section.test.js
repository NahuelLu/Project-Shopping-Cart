import { render, screen } from "@testing-library/react";
import Section from "../components/Section";
jest.mock("@fortawesome/react-fontawesome",()=>{
    return {
        FontAwesomeIcon: ({children})=>{ return <div>{children}</div>}
    }
})
jest.mock("react-router-dom",()=>{
    return {
        Link: ({to,children})=> <a href={to}>{children}</a>
    }
})
describe("Test for Section Components",()=>{
    test("Render Section component correctly",()=>{
        render(<Section />)
    })
    test("Render prop name correctly",()=>{
        const name = "Link1"
        render(<Section name={name}/>)
        const heading = screen.getByRole("heading")
        const text = heading.innerHTML
        expect(text).toEqual(name)
    })
    test("Render a element correctly",()=>{
        const path = "home"
        render(<Section name={path}/>)
        const a = screen.getByRole("link")
        const text = a.href
        expect(text).toEqual("http://localhost/"+path)
    })
})