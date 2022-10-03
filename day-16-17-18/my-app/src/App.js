import ButtonLike from './components/ButtonLike';
import ToggleButton from './components/ToggleButton';
import React from "react";
import BlockChat from './components/BlockChat';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      
    }
    }
 



  render(){
 
    return(
        <div className="App">
            <BlockChat />
 
        </div>
    );
  }
}

 
 
