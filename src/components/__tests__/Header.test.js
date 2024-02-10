import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appstore from "../../utils/appstore";
import "@testing-library/jest-dom";

it("Should load Header Component with a login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button");
  // const loginButton = screen.getByText("Login")

  expect(loginButton).toBeInTheDocument();
});

it("Should load Header Component with a Cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // const cartItems = screen.getByText("Cart - (0 items)");
  const cartItems = screen.getByText(/Cart/);

  // const loginButton = screen.getByText("Login")

  expect(cartItems).toBeInTheDocument();
});

it("Should change Login button to Logout on a click", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const LoginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(LoginButton);
  const LogoutButton = screen.getByRole("button", { name: "Logout" });
  fireEvent.click(LogoutButton);

  expect(LogoutButton).toBeInTheDocument();
});

it("Logo should load on rendering header", ()=>{

  const header = render(
        <BrowserRouter>
          <Provider store={appstore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
    // Check if Logo is Loaded
      const logo = header.getByTestId("logo")
      expect(logo.src).toBe("http://localhost/FoodVilla.jpg")
    //   console.log(logo)
})

// it("Online status should be green on rendering header", ()=>{

//     const header = render(
//           <BrowserRouter>
//             <Provider store={appstore}>
//               <Header />
//             </Provider>
//           </BrowserRouter>
//         );  
//       // Check online status
//      const onlineStatus = header.getByTestId("online-status")
//      expect(onlineStatus.innerHTML).toBe("✅")

//   })
  