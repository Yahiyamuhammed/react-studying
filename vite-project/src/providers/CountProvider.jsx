import { Children, useState } from "react";
import CountContext from "../context/CountContext";


export default function CountProvider({children}){

    let [count,setCount]=useState(0)

    return( <CountContext.Provider  value={{count,setCount}}>
        {children}
    </CountContext.Provider>)
}