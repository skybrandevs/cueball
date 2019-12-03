import React from "react";
import helpgame from "../../helpgame.svg";
import Topnav from "./partials/topnav";
import newsupdates from "../../newsupdates.svg";





const News = () => (


    <div>
<Topnav/>

<div className="rainbow-background">

<div className="container">



<div className="row">

<div className="col-sm-12">
<h4 className="leader-font"><img src={newsupdates} className="img-fluid help-game"/>News & Updates</h4>

<h6 className="top-leader-2">CUEBALL LAUNCHES ON DEC.26/19</h6>
    <p className="no-data">We are pleased to inform the entire stakeholders that we would be launching on the 26th decemeber 2019.</p>

</div>

</div>


</div>


</div>

    </div>



);


export default News;
