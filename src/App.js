import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/UserClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appstore from "./utils/appstore";
import Cart from "./components/Cart";

const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // Authentication
  useEffect(() => {
    const data = {
      name: "Sajid",
    };
    setUserName(data.name);
  }, []);
  return (
    <div className=" flex flex-col min-h-screen">
      <Provider store={appstore}>
        <UserContext.Provider
          value={{ loggedInUser: userName, setUserName:setUserName }}
        >
          <Header />
          <div className="flex-grow container mx-auto p-4">
            <Outlet />
          </div>
          <Footer />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element:  <Suspense fallback={<Shimmer />}>
        <About />
      </Suspense>,
        children: [
          {
            path: "profile", // ParentPath/{path} =>localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// async defer
root.render(<RouterProvider router={appRouter} />);
