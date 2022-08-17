import React,{useState} from 'react'

const Accordianexpand = ({item}) => {

    const [open,setOpen] = useState(false)

    const handle = () => {
        setOpen(!open)
    }
  return (
    <div>
       <h3>{item.title}</h3>
       <h4>{open?item.info: ""}</h4>
       <button onClick={handle}>+</button>
    </div>
  )
}

export default Accordianexpand
