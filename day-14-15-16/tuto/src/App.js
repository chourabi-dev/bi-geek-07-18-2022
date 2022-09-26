import logo from './logo.svg';
import './App.css';
import Contact from './componenets/Contact';

 
function App() {

  const element = <h1>hello world</h1>;

  const didLike = true;


  const contacts = [
    { id:1, name:"chourabi taher", email:'tchourabi@gmail.com', phone:"93863732" },
    { id:2, name:"chourabi taher 1", email:'tchourabi@gmail.com', phone:"93863732" },
    { id:3, name:"chourabi taher 2", email:'tchourabi@gmail.com', phone:"93863732" },
 
  ]
  return (
   
    <div> 
      <ul> 
      
       {
        contacts.map( (c)=>{

         return  <li key={ c.id  }>
                    <Contact phone={ c.phone } fullname={ c.name }  email={ c.email }  />
                  </li>  

        } )
       }




  
      </ul>


    </div>
 
  );
}

export default App;
