import React from "react";

export default class ToggleButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active : props.active,
            toggleFn: props.toggleFn
        }


        console.log(props);
    }





    render(){
        return(
            <div  onClick={ ()=>{ 
                 this.setState( { active: ! this.state.active } ); 
                    
                 
                 this.props.toggleFn();


                 }} className= { this.state.active === false ? "toggle-button" : "toggle-button active" } >
                <div></div> 
            </div>
            
        )
    }
}