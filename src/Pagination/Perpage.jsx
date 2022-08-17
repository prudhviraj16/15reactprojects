import React from 'react'

const Perpage = ({data,pageHandler}) => {
    let pageNumbers = []
    console.log(data.length)
    for(let i=0;i<Math.ceil(data.length/10);i++){
        pageNumbers.push(i)
    }



    return (
    <div>
        {pageNumbers.map((button,index)=>(
            <button style={{fontSize:"24px",margin:"10px"}} key={index} onClick={()=>pageHandler(index)}>
                {button+1}
            </button>
        ))}
    </div>
  )
}

export default Perpage