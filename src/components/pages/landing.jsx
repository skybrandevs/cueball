import React from "react";
import Topnav from "./partials/topnav";
import Newsletter from "./partials/newsletter";
import ball from "../../ball.svg";
import play from "../../play.svg"
import { Link } from "react-router-dom";
import get from "../../get.png";
import basics from "../../basics.png";
import promotions from "../../promotions.png";
import tips from "../../tips.png";
import locations from "../../locations.png";



const Landing = () => (

<div>


<Topnav/>


    <div className="fancy-bac">


<div className="container">


<div className="col-sm-12">

<img src={ball} className="img-fluid balls shake"/>

</div>


</div>



<div className="container">

<div className="row">


<div className="col-sm">

<div className="card">

<img src={get} className="img-fluid get-mobile"/>
<h4 className="card-fnt-header"> <span className="gold">Get </span> <br/> Started</h4>
<div className="container">
<div className="brder"></div>
<p className="half-detials">Get started and start winning <br/> in 2 easy steps</p>
<Link to="/account">
<button className="btn-brief">Continue</button>
</Link>
</div>


</div>

</div>

<div className="col-sm">
<div className="card">
<img src={basics} className="img-fluid"/>
<h4 className="card-fnt-header"> <span className="gold">Cueball </span> <br/> Basics</h4>
<div className="container">
<div className="brder"></div>
<p className="half-detials">All you need to know about <br/>Cueball</p>
<button className="btn-brief">Detials</button>
</div>


</div>
</div>

<div className="col-sm">
<div className="card">
<img src={promotions} className="img-fluid"/>
<h4 className="card-fnt-header"> <span className="gold">Cueball</span> <br/>Promotions</h4>
<div className="container">
<div className="brder"></div>
<p className="half-detials">Check out our promotions <br/> and exclusive starter packs</p>
<button className="btn-brief">Check out</button>
</div>

</div>
</div>

<div className="col-sm">
<div className="card left-nn">
<img src={tips} className="img-fluid"/>
<h4 className="card-fnt-header"> <span className="gold">Tips </span> <br/> & Tricks</h4>
<div className="container">
<div className="brder"></div>
<p className="half-detials">Learn how to play & <br/> dominate the <br/> game</p>
<button className="btn-brief">Learn</button>
</div>

  
</div>
</div>


</div>

</div>


</div>

{/*
<div className="locations hide-on-mobile">


<div className="container">

<div className="col-sm-12">

<img src={locations} className="img-fluid loocc"/>

</div>


</div>


</div>
*/}

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
