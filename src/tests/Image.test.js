import { render, screen} from "@testing-library/react";
import Image from "../components/Image";

describe("Tests for Image component",()=>{
    const pathExample = "image.jpg"
    test("Render image from path correctly",()=>{
        render(<Image path={pathExample}/>)
        const image = screen.getByRole("img")
        expect(image).toBeInTheDocument()
    })
})
