import React,{useState}from 'react'
import { useDispatch } from 'react-redux'
import { ChangeColor } from './features/theme'

function ColorSelector() {
const[color,setColor]=useState('')
const dispatch=useDispatch()
  return (
    <div>
      <input type="color" value={color}
OnChange={e=>setColor(e.target.value)}  />
<button onClick={()=> dispatch
  (ChangeColor(color))}>Change color</button>

 </div>
  )
}

export default ColorSelector
