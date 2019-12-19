import React from "react";
import { Link } from "react-router-dom";
import profile from "../../../profile.svg";
import help from "../../../help.svg";
import home from "../../../home.svg";
import cuee from "../../../cuee.png";



const Topnav = () => (
  

<div className="bac-color float-right sticky-top">

<div className="container-fluid">

    <div className="float-left">

<Link to="/">
    <img src={home} className="img-fluid icon-small zoom" title="Go back"/>
</Link>

<img src={cuee} className="img-fluid the-cue" />

    </div>

<div className="float-right">
    <a href="https://www.cueballwallet.com" target="_blank;">
<img src={profile} className="img-fluid icon-small zoom" title="My profile"/>
</a>

<Link to="/help">
<img src={help} className="img-fluid icon-small zoom" title="get help"/>
</Link>
</div>


</div>

</div>



);


export default Topnav;