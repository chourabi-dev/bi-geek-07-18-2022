import ButtonLike from './components/ButtonLike';
import ToggleButton from './components/ToggleButton';
import React from "react";

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showList: false
    }


    this.switchListDisplay = this.switchListDisplay.bind(this);
  }


  switchListDisplay(){
    this.setState({
      showList : ! this.state.showList
    })
  }



  render(){


    let articles = [
      { title:"ReactJS", nbrLikes: 18, didLike:false },
      { title:"Angular", nbrLikes: 10, didLike:true },
      { title:"VueJS", nbrLikes: 12, didLike:true },
      
    ];


    return(
      <div className="App">


       {

         /* articles.map( (a)=>{
            return <ButtonLike nbrLikes={ a.nbrLikes }  didLike={ a.didLike } />;

          })*/

       }


       <div>
        <ToggleButton toggleFn={ this.switchListDisplay } active={ false } />  <label htmlFor="">show/hide list</label>
       </div>

       
       {
          this.state.showList === true ? 
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>REACT</li>
            <li>NODE</li>
            <li>EXPRESS</li>
              
          </ul>
          :
          null
       }




      
 
    </div>
    );
  }
}

 
 
