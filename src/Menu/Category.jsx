import React from 'react'

const Category = ({filterItems,category}) => {

    console.log(category)
  return (
    <div>
        {category.map((item,index)=>(
            <button key={index} onClick={()=>filterItems(item)}>{item}</button>
        ))}
    </div>
  )
}

export default Category
