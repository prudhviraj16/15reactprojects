import React,{useState} from 'react'
import datas from '../data'
import Accordianexpand from './Accordianexpand'
const Accordian = () => {
    const [data,setData] = useState(datas)

  return (
    <div>
        {data.map((item)=>(
            <Accordianexpand key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default Accordian
