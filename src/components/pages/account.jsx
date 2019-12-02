import React from "react";
import cue from "../../images/cue.png";
import fb_new from "../../fb_new.svg";
import canceal from "../../canceal.svg";
import { Link } from "react-router-dom";
import Topnav from "./partials/topnav";


const Account = () => (


<div>



<div className="bac-overall">

    <Topnav/>

<div className="container">


<div className="col-sm-12">

    <img src={cue} className="img-fluid cue-logo"/>

<h4 className="my-account">My Account</h4>

<p className="my-account-intro"> Sign into your CUEBALL account <br/>  you can redeem all your winnings with one account. </p>

</div>

<div className="col-sm-12">




<div className="container">

<button className="btn-account"><span><img src={fb_new} className="img-fluid fb"/></span>Sign in with facebook</button>


{/*
<Link to="/landing">
<img src={canceal} className="img-fluid canceal"/>
</Link>

*/}
</div>





</div>



</div>


</div>

{/**parent div */}
</div>


);


export default Account;