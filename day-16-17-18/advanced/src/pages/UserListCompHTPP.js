import React from "react";

export default class UsersListPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,

            users:[],

            errorMessage: ''
        }
    }


    componentDidMount(){
        this.initCALL();
    }


    initCALL(){
        
        // let the user know that we are loading !!!!

        this.setState({ isLoading: true , errorMessage:''})

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
            .then(response => response.json())
            .then(result =>{
                
                console.log(result);

                this.setState({ users: result })

                // Loading is done !!!!
                this.setState({isLoading:false})
            })
            .catch(error =>
                this.setState({isLoading:false, errorMessage:'Something went wrong, please try again.' })
            );
    }

    render(){
        return(
            <div>
               
               
               {
                this.state.isLoading === true ?
                <div>Loading...</div>
                :
                null
               }


                {
                this.state.errorMessage !== '' ?
                    <div>
                    <div className="alert alert-danger">
                        {this.state.errorMessage} <br />

                        <button className="btn btn-danger" onClick={ ()=>{

                            // make the same call !!!
                            this.initCALL();
                        } } >refresh</button>
                    </div>
               </div>
               :
               null
               }



               <div>
                <ul>
                    {
                        this.state.users.map((u)=>{
                            return(<li>
                                <h3>{ u.name }</h3>
                                <p>
                                    { u.email }
                                </p>
                            </li>);
                        })
                    }
                </ul>
               </div>


               
               
            </div>
        );
    }
}