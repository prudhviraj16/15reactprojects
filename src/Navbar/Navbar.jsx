import React,{useState,useEffect} from 'react'
import './Navbar.css'
const Navbar = () => {

  const [icon,setIcon] = useState(false)
  
  const setIcons = () =>{    
    setIcon(!icon)
  }
  return (
    <div className='container'>
        <div className='icon'>
          Icon
        </div>
       {icon?<ul className='list'>
            <li>Home</li>
            <li>Services</li>
            <li>Feedback</li>
            <li>About</li>
            <li>Contact</li>
           
        </ul>:""}
        <i className={icon?"fa-solid fa-bars" : "fa-solid fa-xmark"} onClick={setIcons}/>
    </div>
  )
}

export default Navbar