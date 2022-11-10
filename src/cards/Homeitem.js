import React from 'react'
import "./styles/Homeitem.css"
export default function Homeitem() {
    const cardHover = ()=>{
        const  icon = document.querySelector('.icon')
        icon.classList.add("toggle");
    }
    const cardOut = ()=>{
        const  icon = document.querySelector('.icon')
        icon.classList.remove("toggle");
    }
  return (
    <>
        <div className="card" onMouseOver={cardHover} onMouseOut={cardOut}>
             <i className='icon fa fa-paint-brush fa-2x'></i>
             <h2>Strategy & Research</h2>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. error at velit quos.</p>
        </div>
    </>
  )
}
