import React,{useState,useEffect} from 'react'
import TodoIterable from './TodoIterable'

const TodoAdd = () => {
  const [items,setItems] =useState([])
  const [todo,setTodo] = useState({
      title : '',
      content : '',
  })

  const changeHandler = (e) => {
    const {name,value} = e.target

    setTodo((prevState)=>{
     return {
      ...prevState,
      [name] : value
      }
    })
  }


  const submitHandler = (e) =>{
    e.preventDefault()

    setItems((prevState)=>{
      return [...prevState,todo]
    })
  }

  const deleteHandler = (id) =>{
      setItems(prevState=> prevState.filter((item,index)=>index!==id))
  }

  const editHandler = (id) =>{
    // console.log(todo[id])
    const item = items.filter((single,index) => index===id)
    setTodo(()=>{
      return {

        title : item.title,
      }
      
        // content : item.content 
    })
  }
    
  console.log(items)
  return (
    <div>
      <input type="text" name="title" value={todo.title} onChange={changeHandler} />
      <textarea name="content" value={todo.content} onChange={changeHandler}></textarea>
      <button onClick={submitHandler}>Submit</button>
      {items.map((item,index)=>(
        <TodoIterable key={index} item={item} deleteHandler={deleteHandler} index={index} editHandler={editHandler}/>
      ))}
    </div>
  )
}

export default TodoAdd
