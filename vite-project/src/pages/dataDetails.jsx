import { useEffect, useState } from "react";
import { Link, useAsyncError, useParams } from "react-router-dom";

export default function (){
    const [data,setData]=useState([])
    useEffect(()=>{getData()},[])
    const {id}=useParams()

    const getData=async ()=>{
        const res =await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const result=await res.json()
        setData(result)
    }
    console.log(id);
    
    return(
        <div>
            <h1>this is data details</h1>

            <Link to='/'>go to home</Link>
             <br />
            <Link to='/data'>go to data</Link>
            <ol>
            <li key={data.id}>{data.title}</li>
            </ol>
            
        </div>
    )
}