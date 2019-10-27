import React from "react";
import { Link } from "react-router-dom";
import profile from "../../../profile.svg";
import help from "../../../help.svg";



const Topnav = () => (
  

<div className="bac-color float-right sticky-top">

<div className="container-fluid">

<div className="float-right">
    <Link to="/account">
<img src={profile} className="img-fluid icon-small zoom" title="My profile"/>
</Link>

<Link to="/">
<img src={help} className="img-fluid icon-small zoom" title="get help"/>
</Link>
</div>


</div>

</div>



);


export default Topnav;