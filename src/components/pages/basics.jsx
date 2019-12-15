import React from "react";
import Topnav from "./partials/topnav";
import table1 from "../../table1.jpeg";
import table3 from "../../table3.jpeg";
import table4 from "../../table4.jpeg";
import table5 from "../../table5.jpeg";
import table6 from "../../table6.jpeg";

const Basics = () => (

<div>

<Topnav/>


<div className="bb">

<div className="container-fluid">
    

<div className="row">
    <div className="col-sm-12">
<h3 className="basics">  HOW TO PLAY CUEBALL <span className="the">(The Basics) </span></h3>

    </div>


<div className="col-sm-6">

<h4 className="numbers">1</h4>

<img src={table1} className="img-fluid resize"/>

</div>



<div className="col-sm-6">

<h4 className="numbers">2</h4>


<img src={table3} className="img-fluid resize"/>

</div>





</div>

<div className="row">

<div className="col-sm-6">

<h4 className="numbers">3</h4>

<img src={table4} className="img-fluid resize"/>

</div>


<div className="col-sm-6">

<h4 className="numbers">4</h4>

<img src={table6} className="img-fluid resize"/>

</div>



<div className="col-sm-6">

<h4 className="numbers">5</h4>

<img src={table5} className="img-fluid resize"/>

</div>



</div>




</div>





</div>







</div>





);


export default Basics;