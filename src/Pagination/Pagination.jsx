import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import Perpage from './Perpage'
const Pagination = () => {
    const [data,setData] = useState([])
    const [perpage,setPerpage] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{setData(res.data)
        setPerpage(res.data.slice(0,10))
    }).catch(err=>console.log(err))
    },[])
    
    
    const pageHandler = (number) => {
        console.log(number)
        setPerpage(data.slice(((number)*10),(number*10)+10))
    }
    console.log(perpage)
  return (
    <div>
        {data.length >= 1 ?
                <Perpage data={data} pageHandler={pageHandler}/>
        : "Data not loaded"}

        {perpage.map(item=>
           <> {item.title}<br></br></>
        )}
    </div>
  )
}

export default Pagination