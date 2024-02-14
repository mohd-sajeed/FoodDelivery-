import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import Mock_Data from "../Mocks/MockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_Data);
    },
  });
});

it("Should search Restaurant List for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(9);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();

  const searchInput = screen.getByPlaceholderText("search");
  expect(searchInput).toBeInTheDocument();

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  // Screen should load 1 Restaurantcard
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);
});

// it("Should filter Top Rated Restaurant", async () => {
//     await act(async () =>
//       render(
//         <BrowserRouter>
//           <Body />
//         </BrowserRouter>
//       )
//     );
  
//     const cardsBeforeFilter = screen.getAllByTestId("resCard");
//     expect(cardsBeforeFilter.length).toBe(9);
    
//     const topRatedBtn = screen.getByRole("button", {name:"Top Rated Restaurants"})
//     // expect(topRatedBtn.length).toBe()
//     fireEvent.click(topRatedBtn)

//     const cardsAfterFilter=screen.getAllByTestId("resCard")
//     expect(cardsAfterFilter.length).toBe(5)
    
//   });
  
