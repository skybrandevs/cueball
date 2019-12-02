import React from "react";
import Topnav from "./partials/topnav";
import helpgame from "../../helpgame.svg";



const Leaderboards = () => (

<div>

<div className="bac-leader">
<Topnav/>


<div className="container">

<div className="row">



<div className="card-leader-board">

<div className="col-sm-12">
<h4 className="leader-font"><img src={helpgame} className="img-fluid help-game"/>Leader boards</h4>
</div>

<div className="container row ">

<div className="col-sm">
    <h6 className="top-leader-2">TOP GAMERS FROM 1st - 5th </h6>
    <p className="no-data">no data to display for now...</p>
</div>


<div className="col-sm">
<h6 className="top-leader-2">TOP GAMERS FROM 6th - 10th </h6>
<p className="no-data">no data to display for now...</p>
</div>

</div>
</div>






</div>


</div>



</div>

<div className="outer-mrg"></div>



</div>


);


export default Leaderboards;