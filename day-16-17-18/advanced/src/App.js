import logo from './logo.svg';
 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import SideMenu from './components/SideMenu';
import ResumePage from './pages/Resume';
import ProtfolioPage from './pages/Portfolio';
import ServicePage from './pages/Service';
import ContactPage from './pages/Contact';
import NotFound from './pages/NotFoundPage';
import UsersListPage from './pages/UserListCompHTPP';

function App() {
  return (
    <Router>
      <div>

 
  <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

   
  <header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle" />
        <h1 class="text-light"><Link to="/">Chourabi Taher</Link></h1>
        <div class="social-links mt-3 text-center">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100009543583029" target={ '_blank' } class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <SideMenu />



    </div>
  </header> 

  <main id="main">

    

    <section class="inner-page">
      <div class="container">
        <Switch> 
          <Route path={ '/' } component={ HomePage  }  exact />
          <Route path={ '/about' } component={ AboutPage  }  exact /> 
          <Route path={ '/resume' } component={ ResumePage  }  exact /> 
          <Route path={ '/portfolio' } component={ ProtfolioPage  }  exact /> 
          <Route path={ '/services' } component={ ServicePage  }  exact /> 
          <Route path={ '/contact' } component={ ContactPage  }  exact /> 


          <Route path={ '/users/list' } component={ UsersListPage  }  exact /> 


          
          {
            /**
             * <Route path={ '/contact/:id' } component={ ContactPage  }  exact /> 
             */
          }


          
          <Route path={ '*' } component={ NotFound  }  /> 
          
          
          
          
          
          
        </Switch>

      </div>
    </section>

  </main> 

 
  <footer id="footer">
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>iPortfolio</span></strong>
      </div>
      <div class="credits">
        
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>



        
       



      </div>
    </Router>
  );
}

 

export default App;
