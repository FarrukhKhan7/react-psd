
import '../App.css';
import logo from '../images/logo.png'

 function Header() {
    function abc(){
        let mainNav = document.getElementById('js-menu');
        let navBarToggle = document.getElementById('js-navbar-toggle');
    
        navBarToggle.addEventListener('click', function () {
         mainNav.classList.toggle('active');
          
        });
       
    
    }
  return (
    
    <div>
      
    <nav className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle" >
            <i className="fas fa-bars" onClick={abc}></i>
        </span>
         <a href="#" className="logo"><img src={logo} alt="logo" /></a>
        <ul className="main-nav" id="js-menu">
            <li>
                <a href="#" className="nav-links navActive ">Home</a>
            </li>
            <li>
                <a href="#" className="nav-links">About Us</a>
            </li>
            <li>
                <a href="#" className="nav-links">Features</a>
            </li>
            <li>
                <a href="#" className="nav-links">Products</a>
            </li>
            <li>
                <a href="#" className="nav-links navClass">Contact Us</a>
            </li>
        </ul>
    </nav>
    </div>
  );
}

export default Header;
