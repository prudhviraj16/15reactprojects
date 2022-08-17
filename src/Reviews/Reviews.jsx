import React,{useState,useEffect} from 'react'
import reviews from '../data'
const Reviews = () => {
    const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

    const increase = () => {
        setIndex((index+1)%reviews.length)
    }

    const decrease = () => {
        setIndex((index-1+reviews.length)%reviews.length)
    }
  return (
    <div>
        <img src={image} alt="" />
        <h1>{name}</h1>
        <h3>{job}</h3>
        <p>{text}</p>
        <button onClick={decrease}>left</button>

        <button onClick={increase}>right</button>
    </div>
  )
}

export default Reviews