import { useState } from "react";
import CountContext from "../contexts/CountContext";

export default function ({children}){
    const [count,setCount]=useState(0)

    return <CountContext.Provider value={{count,setCount}}>{children}</CountContext.Provider>
}