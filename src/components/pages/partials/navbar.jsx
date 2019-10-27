import React from "react";
import { Link } from "react-router-dom";
import  cue from "../../../images/cue.png"
import community from "../../../community.svg";
import news from "../../../news.svg";
import leader from "../../../leader.svg";


const Navbar = () => (



<div>



<div className="bac-black ">

 <div className="container">


     <div>
<img src={cue} className="img-fluid img-2 logo-cue"/>
         </div>


         <ul class="nav justify-content-end">
 
  <li class="nav-item">
    <Link to="/" class="nav-link" ><img src={community} className="img-fluid community img-2 zoom"/>COMMUNITY</Link>
  </li>
  <li class="nav-item">
    <Link to="/" class="nav-link" ><img src={news} className="img-fluid community img-2 zoom" />NEWS & UPDATE</Link>
  </li>

  <li class="nav-item">
    <Link to="/" class="nav-link" ><img src={leader} className="img-fluid img-2 community zoom" />LEADER BOARDS</Link>
  </li>
 
</ul>


    

</div>


    </div>


</div>













);


export default Navbar;