import React from 'react'
import "./styles/Homeitem.css"
export default function Homeitem(props) {
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
             <i className={props.logo}></i>
             <h2>{props.title}</h2>
           <p>{props.description}</p>
        </div>
    </>
  )
}
