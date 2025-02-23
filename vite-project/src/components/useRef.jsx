import { useEffect, useRef, useState } from "react"

export default function(){
    const [number,setNumber]=useState(0)
    const [fact,setFact]=useState('')
    const [loading,setLoading]=useState(false)
    const numRef=useRef()

    useEffect(()=>{
        setLoading(true)
        async function setFacts (){
            
            
        }
        setFacts()
        
    },[number])
    
   
    async function getFact() {
        setNumber(numRef.current.value)
        
        
        
    }

    
        
            if (loading){
                return <h1>data is loading from server</h1>
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