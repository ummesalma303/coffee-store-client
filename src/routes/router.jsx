import {createBrowserRouter} from "react-router-dom";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";
import MainLayout from "../Layouts/MainLayout";


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
          path: "/updateCoffee",
          element: <UpdateCoffee></UpdateCoffee>,
        },
      ]
    }
  ]);
  export default router