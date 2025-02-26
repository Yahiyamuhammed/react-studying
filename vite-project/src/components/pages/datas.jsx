import { useEffect, useState } from "react";
import { Link, useAsyncError } from "react-router-dom";

export default function (){
    const [data,setData]=useState([])
    useEffect(()=>{getData()},[])
    const getData=async ()=>{
        const res =await fetch('https://jsonplaceholder.typicode.com/posts')
        const result=await res.json()
        setData(result)
    }
    return(
        <div>
            <h1>this is datas</h1>

            <Link to='/'>go to home</Link>
            <ol>
            {data.map((dat)=>{return <li>{dat.title}</li>})}
            </ol>
            
        </div>
    )
}