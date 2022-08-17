import React from 'react'
import './Todo.css'
const TodoIterable = ({item,deleteHandler,index,editHandler}) => {
    const {title,content} = item
  return (
    <div className='flex'>
        <h3>{title}</h3>
        <h4>{content}</h4>
        <button onClick={()=>deleteHandler(index)}>Delete</button>
        <button onClick={()=>editHandler(index)}>Edit</button>
    </div>
  )
}

export default TodoIterable
