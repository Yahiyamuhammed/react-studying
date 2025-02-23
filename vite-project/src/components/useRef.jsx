import { useEffect, useRef, useState } from "react"

export default function(){
    const [number,setNumber]=useState(0)
    const [fact,setFact]=useState('')
    const numRef=useRef()
    
    useEffect(()=>{
        async function setFacts (){
            const result= await fetch(`http://numbersapi.com/${number}`)
            const texts=await result.text()
            setFact(texts)
            console.log(texts);
        }
        setFacts()
    },[number])
    
   
    async function getFact() {
        setNumber(numRef.current.value)
        
        
    }
    return (
        <>
            <div>
                <input ref={numRef} type="text" />
                <button onClick={getFact}>get fact</button>
                <p>{number}</p>
                <h1>{fact}</h1>
            </div>
        </>
    )
}