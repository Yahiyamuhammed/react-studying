import { useRef, useState } from "react"

export default function(){
    const [number,setNumber]=useState()
    const numRef=useRef()
    function getFact() {
        setNumber(numRef.current.value)
    }
    return (
        <>
            <div>
                <input ref={numRef} type="text" />
                <button onClick={getFact}>get fact</button>
                <p>{number}</p>
            </div>
        </>
    )
}