import { useContext, useState } from "react";
import {div,button} from './counter.module.css'
import StateCards from "./stateCards";
import CountContext from "../context/CountContext";
import useCount from "../hooks/useCount";
// import { countContext } from "../App";


export default function (){

    const {count,setCount} = useCount()
    
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
     return (
        <div className={div}>
            <h1>COUNT :{count}</h1>
            <button className={button} onClick={increment}>+</button>
            <button className={button} onClick={decrement}>-</button>
            < StateCards count={count}/>
        </div>
        
     )
}