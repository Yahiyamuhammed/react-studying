import { useContext } from "react";
import CountContext from "../contexts/CountContext";

export default function useCount(){
    return useContext(CountContext)
}