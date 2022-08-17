import React,{useState,useEffect} from 'react'
import Todolistseparate from './Todolistseparate'

const Todolist = () => {

  const [text,setText] = useState('')
  const [items,setItems] =useState([])
  const textHandler = (e) => {
    setText(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setItems((prevState)=>
      [...prevState,text]
    )
    setText('')
  }

  const deleteHandler = (id) => {
    const newitems = items.filter((item,index)=>index!==id)
    setItems(newitems)
  }

  console.log(items)
  return (
    <div>
      
      <input type="text" onChange={textHandler} value={text}/>
      <button onClick={submitHandler}>Add</button>
      {items.map((item,index)=>
        // <li>{item}</li>
        <Todolistseparate key={index} item={item} index={index} deleteHandler={deleteHandler}/>
      )}
    </div>
  )
}

export default Todolist
