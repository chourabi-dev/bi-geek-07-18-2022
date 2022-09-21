export default function Contact(props){




    return(
        <div>
            <h3> { props.fullname } </h3>
            <p>{ props.email }</p> 
            <p>{  props.phone == null ? 'no phone number' :  props.phone }</p>
        </div>
    );
}