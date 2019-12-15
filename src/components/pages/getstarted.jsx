import React from "react";
import Topnav from "./partials/topnav";
import googleplaywhite from "../../googleplaywhite.png"
import appstore from "../../appstore.svg";

const Getstarted = () => (

<div>

<Topnav/>

<div className="bb">


<div className="container">

<div className="row">

<div className="col-sm-12">



<h3 className="join"> DOWNLOAD NOW AND PLAY ON IOS / ANDROID  </h3>
<p className="sub-intro">Build your technique, pick your gear and express your style on the streets of snooker  <br/>with playgrounds & players all over the world.</p>

<div>
<a href="">
<img src={googleplaywhite} className="img-fluid img-logo-app zoom "/>
</a>

<a href="">
<img src={appstore} className="img-fluid img-logo-app-2 zoom"/>
</a>
</div>


</div>


</div>


</div>



</div>


</div>



);


export default Getstarted;