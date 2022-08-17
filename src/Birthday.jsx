import React,{useState} from 'react'
import items from './data'
const Birthday = () => {
    const [data,setData] = useState(items)
    const deleteHandler = () => {
        setData([])
    }
    console.log(data)
  return (
    <div>
        <h1>{data.length} birthdays today</h1>
      {data.map((item)=>(
            <>
                <img src={item.image} alt="" />
                <h1>{item.name}</h1>
                {/* <button>Delete</button> */}
            </>
        
      ))}
      <button onClick={deleteHandler}>Clear All</button>
    </div>
  )
}

export default Birthday
