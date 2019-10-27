import React from "react";
import Topnav from "./partials/topnav";
import Navbar from "./partials/navbar";
import Newsletter from "./partials/newsletter";
import esrb from "../../esrb.png"
import unity from "../../unity.jpg"
import play from "../../play.svg"
import tutorial from "../../images/tutorial.jpg";
import { Link } from "react-router-dom";



const Landing = () => (

<div>

    <div className="fancy-bac">

<Topnav/>
<Navbar/>



<div className="container">

<div className="row">

<div className="col-sm-6">


<h3 className="main-intro">Break <br/> New Grounds.</h3>

<p className="sub-intro">From the street to real gaming, Break new grounds in CUEBALL.</p>

<img src={esrb} className="img-fluid esrb zoom"/>
<img src={unity} className="img-fluid unity zoom"/>

</div>



<div className="col-sm-6">

<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={tutorial} className="img-fluid tutu img-2"/>
    </div>
    <div class="carousel-item">
    <img src={tutorial} className="img-fluid tutu img-2"/>
    </div>
    <div class="carousel-item">
    <img src={tutorial} className="img-fluid tutu img-2"/>
    </div>
  </div>
</div>

  


</div>






</div>


</div>





</div>



{/** end of first section*/}


<div className="bb">


<div className="container">


<div className="row">


<div className="col-sm-12">

<h3 className="join"> JOIN TODAY FOR THE ULTIMATE CUEBALL EXPERIENCE </h3>

<p className="sub-intro">Build your technique, pick your gear and express your style on the streets of snooker ; <br/>with playgrounds & players all over the world.</p>


<div>
<Link to="/">
<button className="cue-btn">Play Now</button>
</Link>


<Link to="/">

<span className="span-text"><img src={play} className="img-fluid icon-small-2 zoom"/>Watch Trailer</span>

</Link>


</div>


</div>




</div>




</div>



</div>

{/**parent div closure */}



<Newsletter/>


</div>









);


export default Landing;
