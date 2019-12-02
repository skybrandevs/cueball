import React from "react";
import esrb from "../../../esrb.png";
import unity from "../../../unity.jpg"
import careers from "../../../careers.svg";
import lang from "../../../lang.svg";
import leader2 from "../../../leader2.svg"
import help2 from "../../../help2.svg";
import news from "../../../news.svg";
import community from "../../../community.svg";
const Footer = () => (


<div>




<div className="disclaimer-bac-2">


<div className="container">

<div className="row">
<div className="col-sm-8">

<ul>


<h6 className="follow">CUEBALL</h6> <br/>
<li className="li-style-1">About CUEBALL</li>

<li className="li-style-1">Basics</li>

<li className="li-style-1">CUEBALL Promotions</li>

<li className="li-style-1">Tips & Tricks</li>


</ul>

</div>


<div className="col-sm-4">

<h6 className="follow float-right">FOLLOW CUEBALL</h6> <br/>


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

<li className="ff"><img src={help2} className="img-fluid lang zoom"/> HELP CENTER</li>

<li className="ff"><img src={leader2} className="img-fluid lang zoom"/>LEADER BOARDS</li>

<a href="https://optimalsplus.com/about" target="_blank;">
<li className="ff">ABOUT US</li>
</a>

<a href="https://optimalsplus.com/careers" target="_blank;">
<li className="ff"><img src={careers} className="img-fluid lang zoom"/>CAREERS</li>
</a>

<li className="ff"><img src={community} className="img-fluid lang zoom"/>COMMUNITY</li>

<li className="ff"><img src={news} className="img-fluid lang zoom"/>NEWS & UPDATE</li>


</ul>
</div>



<div className="col-sm-12 mrg-top">

<ul>

<li className="tyy">Legal</li>
<li className="tyy">Online Service Updates</li>
<li className="tyy">User Agreement</li> <br/>
<li className="tyy">Privacy & Cookie Policy (Your Privacy Rights)
</li> <br/>

<p className="copyright">© 2019 OPTIMAL PLUS Ltd. </p>


</ul>
    
</div>



</div>




</div>




{/**main div */}
</div>





);


export default Footer;