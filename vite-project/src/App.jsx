import { createContext, useContext, useState } from 'react'

import './App.css'
import Headings from './components/heading'
import Another from './components/another'
import Counter from './components/counter'
import MapFunction from './components/mapFunction'
import Select from './components/select'
import UseEffect from './components/useEffect'
import UseRef from './components/useRef'
import FetchData from './components/fetchData'
import State from './components/state'
export const countContext= createContext()


function App() {
  const data=[
    {id:1,name:'yahya',email:'yahiyamuhammed@gmail.com'},
    {id:2,name:'mufeed',email:'mufeed@gmail.com'},
    {id:3,name:'shammas',email:'shammas@gmail.com'}
]

let [count,setCount]=useState(0)
 
  return (
    <>
      {/* <h1 className='name'>hi hello</h1> */}
      {/* < Headings title='yahiya'/>
      < Headings/>
      < Another/> */}
      {/* < Counter/> */}
      {/* < MapFunction data={data}/> */}
      {/* < Select datas={data}/> */}
      {/* < UseEffect details={data}/> */}
      {/* < UseRef/> */}
      {/* < FetchData/> */}
      <countContext.Provider value={{count,setCount}}>
      < State />

      </countContext.Provider>
    </>
  )
}

export default App
