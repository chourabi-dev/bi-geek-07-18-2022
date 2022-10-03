import React from "react";

export default class BlockChat extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            open : false,
            message: '',




            chat: [   { message:'salut', me:true }, { message:'bien recu', me:false }   ]
        }
    }



    render(){
        return(
            <div>
                

                

                {
                    this.state.open === false ?

                    <div  onClick={ ()=>{
                        this.setState({ open: true })
                    }} className="card card-body  chat-bottom-bar" >
                        click to open chat
                    </div>

                :
                    <div className="chat-bottom-bar" >

                        <div >
                            <button onClick={ ()=>{ this.setState({ open : false }) } } className="btn btn-outline-primary">
                                <i class="fa fa-times-circle" aria-hidden="true"></i>
                            </button>
                        </div>


                        <div className="bloc-chat">
                            {
                                this.state.chat.map( (m)=>{
                                    return (
                                        <div className={ m.me == true ? "message-bloc" : "message-bloc-pc" }>
                                            <div className="message">
                                                { m.message }
                                            </div>
                                        </div>

                                    )
                                } )
                            }
                        </div>

                        <div className="chat-block-response">
                            <input value={ this.state.message }  onChange={ (event)=>{
                                const val = event.target.value;


                                this.setState({ message: val })




                            } }  type="text" className="form-control" placeholder="your message..." />


                            <button onClick={ ()=>{
                                // get the value form the state !!

                                console.log(this.state.message);


                                let chatTMP = this.state.chat;

                                chatTMP.push( { message:this.state.message, me:true } );
                                chatTMP.push( { message:"Bien recu", me:false } );
                                

                                this.setState({ chat:chatTMP , message:'' })

                                

                            } } className="btn btn-outline-primary">
                                <i class="fa fa-paper-plane" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}