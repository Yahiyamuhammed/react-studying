import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/home";
import Datas from "../components/pages/datas";

const router =createBrowserRouter([
    {
      path:'',
      element:< Home/>
    },
    {
      path:'/data',
      element:< Datas/>
    }
  ])
export default router