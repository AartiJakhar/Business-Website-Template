import React from "react";
import {Link} from "react-router-dom"
import "../styles/Home.css"
export default function Home() {
  return (
    <>
      <header>
      <div className="Topcontainer">
        <div>
          <div className="mainrow">
            <h3>Digital Agency</h3>
            <h1>Grow your Business with us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              vel aut animi quam ducimus consequatur voluptas delectus,
              sapiente.
            </p>
            <Link className="btn" to="#0" >More About →</Link>
            <Link to="#0" ><i className="fa fa-play"></i></Link>
           </div>
          
        </div>
      </div>
      </header>
    
    </>
  );
}
// https://demo.gecdesigns.com/demo/webs/creative-business-website-template-130819/img/hero.jpg