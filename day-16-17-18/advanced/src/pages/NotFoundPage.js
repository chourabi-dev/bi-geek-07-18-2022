import React from "react";
import { Link } from "react-router-dom";

export default class NotFound extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        return(
            <div>
                <h1 className="text-center">404 NOT FOUND </h1>
                <p  className="text-center" >
                    Back to <Link to={ '/' }>Home page</Link>
                </p>
            </div>
        );
    }
}