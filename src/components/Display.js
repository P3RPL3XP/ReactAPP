import React,{useState} from 'react'

function Display() {
const [name,setName]=useState('Paul')
  return (
    <div>
      <h2>{name}</h2>
    </div>
  )
}

export default Display