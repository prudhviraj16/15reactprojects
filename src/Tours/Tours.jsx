import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Toursexpand from './Toursexpand'
const Tours = () => {

    const [data,setData] = useState([])

    useEffect(() => {
        axios.get('https://course-api.com/react-tours-project').then(res=>setData(res.data)).catch(err=>console.log(err))
    }, [])

    const deleteHandler = (id) => {
        const filtereddata = data.filter(item=>item.id!==id)
        setData(filtereddata)
    }

  return (
    <div>
        {data.map((item)=>(
            <Toursexpand key={item.id} item={item} deleteHandler={deleteHandler}/>
        ))}
    </div>
  )
}

export default Tours
