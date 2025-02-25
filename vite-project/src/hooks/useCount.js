import { useContext } from "react";
import countContext from "../context/CountContext";

export default function (){
    return useContext(countContext)
}