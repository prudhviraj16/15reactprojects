import React,{useEffect,useState} from 'react'
import items from '../data'
const Slider = () => {
    
    const [data,setData] = useState(items)
    const [index,setIndex] = useState(0)
    const {id,image,name,title,quote} = data[index]
    
    const left = (id) => {
        console.log(id)
        setIndex((id-1+items.length)%items.length)
    }

    const right = (id) => {
        console.log(right)
        setIndex((id+1)%items.length)
    }



  return (
    <div>
        <img src={image} alt="" />
        <h1>{name}</h1>
        <h1>{title}</h1>
        <p>{quote}</p>
        <button onClick={()=>left(index)}>left</button>
        <button onClick={()=>right(index)}>right</button>
    </div>
  )
}

export default Slider