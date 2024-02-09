import React, { lazy,Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "../ProfileClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
// import Instamart from "./components/Instamart";
import { Provider } from "react-redux";
import appstore from "./utils/appstore";
import Cart from "./components/Cart";

const About= lazy(()=>import("./components/About"))
const Instamart = lazy(()=>import("./components/Instamart"))

const AppLayout = () => {
  const [user,setUser]=useState({
    name:"Mohd Sajid",
    email:"ayubkhan08@gmail.com"
  })

  return (  
<Provider store={appstore}>
    <UserContext.Provider value={{user:user,setUser:setUser}}>
      <Header />    
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement:<Error />,
    children:[
      {
        path:"/about",
        element:<Suspense fallback={<Shimmer/>}><About /></Suspense>,
        children:[
          {
            path:"profile",  // ParentPath/{path} =>localhost:1234/about/profile
            element:<Profile />
          }
        ],
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu />
      },
      {
        path:"/Instamart",
        element:<Suspense fallback={<Shimmer/>}><Instamart /></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

// async defer
root.render(<RouterProvider router={appRouter} />);

