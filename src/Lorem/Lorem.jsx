import React,{useState} from 'react'
import data from '../data'
const Lorem = () => {
    const [items,setItems] = useState([])
    const [num,setNum] = useState(0)

    const changeHandler = (e) =>{
        setNum(parseInt(e.target.value))
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        const d = data.slice(0,num)
        setItems(d)
    }

  return (
    <div>
        <input type="text" onChange={changeHandler}/>
        <button onClick={submitHandler}>Generate</button>
        {items.map(item=>(
            <p>{item}</p>
        ))}
    </div>
  )
}

export default Lorem