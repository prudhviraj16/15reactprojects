import React,{useState,useEffect} from 'react'
import axios from 'axios'
import item from '../data'
import TabsExpansion from './TabsExpansion'
const Tabs = () => {
    
    // console.log(data)
    const [index,setIndex] = useState(0)
    const [data,setData] = useState(item[index])

   
    const handleChange = (indx) => {
        
        setData(item[indx-1])
    }

  return (
    <div>
        {item.map((itemtitle)=>(
            <button key={itemtitle.id} onClick={()=>handleChange(itemtitle.id)}>{itemtitle.title}</button>
        ))}
        <h1>{data.title}</h1>
        <p>{data.desc}</p>
        <p>{data.price}</p>
    </div>
  )
}

export default Tabs
