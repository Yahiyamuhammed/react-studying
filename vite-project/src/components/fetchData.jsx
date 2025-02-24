import { useEffect, useState } from "react";
import {div,button,innerDiv,name} from './fetchData.module.css'
export default function(){
    const [count,setCount]=useState(1)
    const [email,setEmail]=useState()
    const [uname,setUname]=useState()
    const inc=()=>setCount(count+1)
    const dec=()=>setCount(count-1)
    const [loading,setLoading]=useState()
    const [error,setError]=useState()


    useEffect(()=>{
        const setUser=async ()=>{
            try{
                setLoading(true)
                setEmail(null)
                const userDetails=await fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
                const details=await userDetails.json()
                console.log(details);
                setUname(details.name)
                setEmail(details.email)
            }
            catch(err){
                setError('failed to load data')
            }
            finally{
                setLoading(false)
            }
            
        }
        setUser()
    },[count])
    
    return (
        <div className={div}>
            <h1>count:{count}</h1>
            <div className={innerDiv}>
                <h1 className={name}>name :{uname} </h1>
                <p>email :{email} </p>
            </div>
            {loading && <h1> data is loading from server</h1>}
            {error && <h1>{error}</h1> }
            <button className={button} onClick={inc}>+</button>
            <button className={button} onClick={dec}>-</button>
        </div>
    )
}