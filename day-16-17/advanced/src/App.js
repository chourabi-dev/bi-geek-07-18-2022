import logo from './logo.svg';
 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/Home';
import AboutPage from './pages/About';

function App() {
  return (
  <Router>
      <div>
        <nav>
        <Link to={ '/' }>Home</Link>
        <Link to={ '/about' }>About</Link>
            
        </nav>

        
        <Switch>
          
          
          
          <Route path={ '/' } component={ HomePage  }  exact />
          <Route path={ '/about' } component={ AboutPage  }  exact />
    
         



        </Switch>
      </div>
    </Router>
  );
}

 

export default App;
