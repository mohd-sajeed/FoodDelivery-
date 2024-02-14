import { render,screen} from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import Mock_Data from "../Mocks/ResCardMock.json"
import "@testing-library/jest-dom"

it("it should render RestaurantCard component with props data", ()=>{
    render(

        <RestaurantCard  resData={ Mock_Data}/>
        )
        const name = screen.getByText("Shah Ghouse Hotel & Restaurant");
        expect(name).toBeInTheDocument()
})

it("it should render RestaurantCard component with props data", ()=>{
    render(

        <RestaurantCard  resData={ Mock_Data}/>
        )
        const name = screen.getByText("Shah Ghouse Hotel & Restaurant");
        expect(name).toBeInTheDocument()
})