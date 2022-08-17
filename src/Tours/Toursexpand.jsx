import React,{useState} from 'react'

const Toursexpand = ({item,deleteHandler}) => {
    // console.log(item)
    const [showmore,setShowmore] = useState(false)
    const {id,image,info,name,price} = item

    const show = () =>{
        setShowmore(!showmore)
    }

    
    return (
    <div className='toursexpand'>
        <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.webp?s=612x612&w=is&k=20&c=M-zkBx55YCn_UZg9cyuVMm1nS_PhSKGqoVybgO1Dp0Y=" alt="" />
        <p>{showmore?info.substring(0,100):info.substring(0,info.length)}</p>
        <button onClick={show}>Show More</button>
        <button onClick={()=>deleteHandler(id)}>Delete</button>
    </div>
  )
}

export default Toursexpand