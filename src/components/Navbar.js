import React from 'react'
import {Link} from "react-router-dom";
import '../styles/Navbar.css'
export default function Navbar() {
    const navSlide = () => {
      const navburger = document.querySelector(".nav");
      navburger.classList.toggle("toggle");
    };
    
    
 
  return (
        <>
        
          <div className="nav fixed-top">
            <div>
              <Link to="/" className="navlogo">
                BLOG-VLOG
              </Link>
            </div>
            <div className="navrow">
              <nav>
                <ul className="d-flex">
                  <li>
                    <Link to="/artical">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/team">Team</Link>
                    <Link to="/">ContactUs</Link>
    
            
                  </li>
                </ul>
              </nav>
            </div>
            <div className="navburgur" onClick={navSlide}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
         
          
        </>
      );
}
