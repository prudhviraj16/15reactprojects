import React from 'react'

const Menuexpanded = ({item}) => {
  return (
    <div>
        <h1>{item.title}</h1>
        <h1>{item.category}</h1>
        <h3>{item.price}</h3>
        <img src={item.img} alt="" />
        <p>{item.desc}</p>
    </div>
  )
}

export default Menuexpanded
