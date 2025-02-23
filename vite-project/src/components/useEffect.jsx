import { useEffect, useState } from "react"

export default function ({details}){
    const [data,setData]=useState('yahya')
    let [email,setEmail]=useState()
    useEffect(()=>{
        setEmail(details.find((person)=>person.name === data).email)},[data])
    const changeSelect=(e)=>{
        setData(e.target.value)
    }
    return (
    <>
        <select name="" id="hkb" onChange={changeSelect}>
            <option value='yahya'>yahiya</option>
            <option value='mufeed'>mufeed</option>
            <option value='shammas'>shammas</option>
        </select>
        <h1>name:{data}</h1>
        <h1>email:{email}</h1>
    </>
    )
}