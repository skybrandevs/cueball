import React from "react";
import esrb from "../../../esrb.png";
import unity from "../../../unity.jpg"
import careers from "../../../careers.svg";
import lang from "../../../lang.svg";
import leader2 from "../../../leader2.svg"
import help2 from "../../../help2.svg";
import news from "../../../news.svg";
import community from "../../../community.svg";
import { Link } from "react-router-dom";
const Footer = () => (


<div>




<div className="disclaimer-bac-2">


<div className="container">

<div className="row">
<div className="col-sm-8">

<ul className="">


<h6 className="follow">CUEBALL</h6> <br/>

<Link to="/basics">
<li className="li-style-1">Basics</li>
</Link>

<a href="register.html" target="_blank;">
<li className="li-style-1">Cueball Lunch Party</li>
</a>

<Link to= "/basics">
<li className="li-style-1">Tips & Tricks</li>
</Link>

</ul>

</div>


<div className="col-sm-4">

<ul>
<h6 className="follow">FOLLOW CUEBALL</h6> <br/>

<a href="https://www.facebook.com/CueBallApp/" target="_blank;">
<li className="li-style-3">FACEBOOK</li>
</a>

<a href="https://www.instagram.com/cueballapp/" target="_blank;">
<li className="li-style-3">INSTAGRAM</li>
</a>


</ul>
</div>


</div>

<div className="brd-line"></div>

<div className="row">

<div className="col-sm-12">

<img src={esrb} className="img-fluid esrb  img-2 padd-bottom float-right"/>
<img src={unity} className="img-fluid unity  img-2-3  padd-bottom float-right"/>

</div>


</div>


</div>

</div>

{/**second footer aspect final design */}


<div className="bac-white">


<div className="container">

<div className="col-sm-12">
<ul>

<li className="ff"><img src={lang} className="img-fluid lang zoom"/>BROWSE LOCATIONS</li>

<Link to="/help">
<li className="ff"><img src={help2} className="img-fluid lang zoom"/> HELP CENTER</li>
</Link>

<Link to="/leaderboards">
<li className="ff"><img src={leader2} className="img-fluid lang zoom"/>LEADER BOARDS</li>
</Link>

<a href="https://optimalsplus.com/about" target="_blank;">
<li className="ff">ABOUT US</li>
</a>

<a href="https://optimalsplus.com/careers" target="_blank">
<li className="ff"><img src={careers} className="img-fluid lang zoom"/>CAREERS</li>
</a>

<li className="ff"><img src={community} className="img-fluid lang zoom"/>COMMUNITY</li>
<Link to="/news">
<li className="ff"><img src={news} className="img-fluid lang zoom"/>NEWS & UPDATE</li>
</Link>

</ul>
</div>



<div className="col-sm-12 mrg-top">

<ul>

<li className="tyy">Legal</li>
<li className="tyy">Online Service Updates</li>
<li className="tyy">User Agreement</li> <br/>
<a href="https://optimalsplus.com/privacy" target="_blank">
<li className="tyy">Privacy & Cookie Policy (Your Privacy Rights)
</li> </a> <br/>

<p className="copyright">© 2020 OPTIMAL PLUS Ltd. </p>


</ul>
    
</div>



</div>




</div>




{/**main div */}
</div>





);


export default Footer;