import React from "react";

export default class ButtonLike extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            didLike :  props.didLike,
            nbrLikes :  props.nbrLikes
        }
    }

    render(){
        return(
            <div>
                <button   onClick={ ()=>{

                    // never edit state directly !!!
                    // this.state.didLike = true

                    this.setState(     
                        {  
                            didLike : ! this.state.didLike,
                        
                            nbrLikes: this.state.didLike === false ? ( this.state.nbrLikes + 1) : ( this.state.nbrLikes - 1  )
                         })


                } }   > { this.state.nbrLikes } { this.state.didLike === false ? 'Like' : 'Dislike' } </button>
            </div>
        );
    }



}