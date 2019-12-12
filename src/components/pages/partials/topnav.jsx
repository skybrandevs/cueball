import React from "react";
import { Link } from "react-router-dom";
import profile from "../../../profile.svg";
import help from "../../../help.svg";
import home from "../../../home.svg";



const Topnav = () => (
  

<div className="bac-color float-right sticky-top">

<div className="container-fluid">

    <div className="float-left">

<Link to="/">
    <img src={home} className="img-fluid icon-small zoom" title="Go back"/>
</Link>

    </div>

<div className="float-right">
    <a href="https://cueball.bizaflix.com/" target="_blank;">
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