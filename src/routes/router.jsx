import {createBrowserRouter} from "react-router-dom";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";
import MainLayout from "../Layouts/MainLayout";
import Coffees from "../Pages/Coffees";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element: <AddCoffee></AddCoffee>,
        },
        {
          path: "/updateCoffee/:id",
          element: <UpdateCoffee></UpdateCoffee>,
          loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)

        },
        {
          path: "/coffees",
          element: <Coffees></Coffees>,
          loader:()=>fetch('http://localhost:5000/coffee')
        },
      ]
    }
  ]);
  export default router