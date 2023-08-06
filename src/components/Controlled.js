import React,{useState} from 'react'
import Test from './Test'

const Controlled = () => {
    const [name,setName]=useState("")
    const changeHandler=e=>{
        setName(e.target.value)
    }
  return (
    <div>
      <center>
        <h2>Name:{name}</h2><br />
        <input type='text' value={name} onChange={changeHandler}/>
        <Test changeEvent={changeHandler} />
      </center>
    </div>
  )
}

export default Controlled
