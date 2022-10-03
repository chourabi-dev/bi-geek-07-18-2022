import { Link } from "react-router-dom";

export default function SideMenu(){
    return(

        <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li><Link to="/" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></Link></li>
          <li><Link to="/about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></Link></li>
          <li><Link to="/resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></Link></li>
          <li><Link to="/portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></Link></li>
         
         
          <li><Link to="/services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></Link></li>
          <li><Link to="/contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></Link></li>
       
        </ul>
      </nav> 
    );
}