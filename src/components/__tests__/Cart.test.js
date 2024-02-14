import { fireEvent, render, screen} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import Mock_Data from "../Mocks/MockCartData.json"
import appstore from "../../utils/appstore";
import Header from "../Header";
import Cart from "../Cart"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
get

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(Mock_Data)
        }
    })  
})
it("should Load Restaurant Menu Component", async () => {
  await act(async () => render(
    <BrowserRouter>
    <Provider store={appstore}>
    <Header/>
    <Cart/>
  <RestaurantMenu />
    </Provider>
    </BrowserRouter>
  ));

  const accordion = screen.getByText("Recommended-(15)")
//   console.log(accordion)
fireEvent.click(accordion)


const itemList = screen.getAllByTestId("foodItems");
expect(itemList.length).toBe(15);

const addBtns = screen.getAllByRole("button",{name:"Add +"})
fireEvent.click(addBtns[0])

const cart1 = screen.getByText("Cart - (1 items)")
fireEvent.click(addBtns[1])
const cart2 = screen.getByText("Cart - (2 items)")

expect(cart1).toBeInTheDocument()
expect(cart2).toBeInTheDocument()

const itemList2 = screen.getAllByTestId("foodItems");
expect(itemList2.length).toBe(17);

fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}))
const itemList3 = screen.getAllByTestId("foodItems");
expect(itemList3.length).toBe(15);

expect(screen.getByText("Cart is empty.Add Items to the cart!")).toBeInTheDocument()

});
