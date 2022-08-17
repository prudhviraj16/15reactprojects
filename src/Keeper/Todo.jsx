import React,{useState,useEffect} from 'react'

const Todo = () => {
    const [name,setName] = useState({
        fname : '',
        lname : '',
        email : ''
    })
    
    const handleChange = (e) => {
        // const value = e.target.value
        // const name = e.target.name
        const {value,name} = e.target
        setName((prevState) => {
           return { ...prevState,[name] : value}
        })
    }

    const submitChange = (e) => {
        e.preventDefault()
    }

    
    return (
        <div>
            <div className="container">
                <h1>Hello {name.fname} {name.lname} {name.email}</h1>
                <input name="fname" type="text" onChange={handleChange} value={name.fname}/>
                <input name="lname" type="text" onChange={handleChange} value={name.lname}/>
                <input name="email" type="text" onChange={handleChange} value={name.email}/>
                
                <button onClick={submitChange}>Submit</button>
            </div>


            
        </div>
    )
}

export default Todo
