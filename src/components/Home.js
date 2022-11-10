import React from "react";
import {Link} from "react-router-dom"
import Homeitem from "../cards/Homeitem";
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
      <section>
       <div className="Container">
         <div className="row">
           <div className="leftBox">
            <h2> 
              Why Choose Us
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non sapiente aspernatur, incidunt qui, nihil alias laborum officiis  nihil alias  nihil alias laborum officiis  nihil alias laborum officiis  nihil alias laborum officiis  nihil alias laborum officiis 
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non sapiente aspernatur, incidunt qui, nihil alias laborum officiis expedita quisquam sequi ipsum beatae vitae a doloremque saepe repellat veniam amet, hic quam rerum pariatur! Error, repudiandae cumque quae velit adipisci nulla. nihil alias laborum officiis  nihil alias laborum officiis  nihil alias laborum officiis  nihil alias laborum officiis 
            </p>
           </div>
           <div className="rightBox">
             <Homeitem/>
             <Homeitem/>
             <Homeitem/>
             <Homeitem/>
           </div>
         </div>
       </div>

      </section>
    </>
  );
}
// https://demo.gecdesigns.com/demo/webs/creative-business-website-template-130819/img/hero.jpg