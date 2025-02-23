import { useState } from "react";
import {div,button} from './counter.module.css'


export default function (){
    let [count,setCount]=useState(0)
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
        </div>
     )
}