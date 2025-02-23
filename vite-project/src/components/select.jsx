import { useState } from "react"

export default function({datas}){

    const [data,setData]=useState('yahiya')
    const [email,setEmail]=useState('')
    const changeSelect=(e)=>{
        console.log(e.target.value);

        const selectedPerson = datas.find(person => person.name === e.target.value);
        console.log(selectedPerson);
        
        
        setData(e.target.value)
        setEmail(selectedPerson.email)

    }
    return (<>
        <select name="" id="hkb" onChange={changeSelect}>
            <option value='yahya'>yahiya</option>
            <option value='mufeed'>mufeed</option>
            <option value='shammas'>shammas</option>
        </select>
        <h1>{data}</h1>
        <h1>email:{email}</h1>
    </>)
}