import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Datas from "../pages/datas";
import DataDetails from "../pages/dataDetails";

const router =createBrowserRouter([
    {
      path:'',
      element:< Home/>
    },
    {
      path:'/data',
      element:< Datas/>
    },
    {
        path:'/data/:id',
        element:< DataDetails/>
    }
  ])
export default router