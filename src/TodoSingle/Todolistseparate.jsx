import React from 'react'

const Todolistseparate = ({item,deleteHandler,index}) => {
  return (
    <div>
        <li>{item}</li>
        <button onClick={()=>deleteHandler(index)}>Delete</button>
    </div>
  )
}

export default Todolistseparate
