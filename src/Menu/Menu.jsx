import React,{useState} from 'react'
import items from '../data'
import Category from './Category'
import Menuexpanded from './Menuexpanded'

const allCategories = ['all',...new Set(items.map(item=>item.category))]

// console.log(allCategories)
const Menu = () => {

    const [menu,setMenu] = useState([])
    const [category,setCategory] = useState(allCategories)

    const filterItems = (category) => {
        if(category==='all'){
            setMenu(items)
            return
        }

        const filitems = items.filter(item=>item.category===category)
        setMenu(filitems)
    }
  return (
    <div>
        <Category category={category} filterItems={filterItems}/>
        {menu.map(item=>(
            <>
            <img src={item.img} alt="" />
            <h1>{item.title}</h1>
            <h1>{item.category}</h1>
            <p>{item.desc}</p>
            </>
        ))}
    </div>
  )
}

export default Menu
