
import '../App.css';

import logo from '../images/logo.png'
import img1 from '../images/bg.png'
import img2 from '../images/Group 461.png'
import img3 from '../images/Group 462.png'
import img4 from '../images/Group 463.png'
import img5 from '../images/Group 486.png'
import img6 from '../images/Group 487.png'
import img7 from '../images/Group 488.png'
import img8 from '../images/Group 489.png'
import img9 from '../images/Group 485.png'
import flogo from '../images/footerlogo.PNG'



function Footer() {
  return (
    <div>
 
 <footer>
   <div class="footer1">

       <div class="col1">
        <div class="imgdiv">
            <img src={flogo} alt="logo" />
        </div>
        <div class="icondiv">
            <ul>
                <li><a href="#"><i class="fab fa-whatsapp-square"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter-square"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
            </ul>
        </div>
       </div>
     
       <div class="col2">
           <div class="text">
               <h3>Contact info</h3>
               <ul>
                   <li>Lorem ipsum dolor sit amet sit amet amet sit amet amet sit amet.</li>
                   <li>+513 313 135 2522</li>
                   <li>contact@logo.io</li>
               </ul>
           </div>
       </div>

       <div class="col3">
        <div class="text">
            <h3>Index</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
       </div>
   </div>

   <div class="footer2">
       <div class="f2text">
           <h3>Logo © 2020</h3>
       </div>
   </div>
</footer>


    </div>
  );
}

export default Footer;








