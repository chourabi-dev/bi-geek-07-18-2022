var checkReqUsernameSpan = document.getElementById('check-req-username');
var usernameInput = document.getElementById('username');


var passwordSpan = document.getElementById('password-req-check');
var passwordInput = document.getElementById('password');


var alertUsername = document.getElementById('alert-username');
var alertPassword = document.getElementById('alert-password');
var usernameMessageAlert = document.getElementById('alert-username-message');


 var connectForm = document.getElementById('connect-form');




usernameInput.addEventListener("keyup", function(event){


    // get the value from the input

    const val =  event.target.value;

    if ( val != "" ) {
        checkReqUsernameSpan.style.display="none";

    } else {
        checkReqUsernameSpan.style.display="contents";
    }

})






passwordInput.addEventListener("keyup", function(event){


    // get the value from the input

    const val =  event.target.value;

    if ( val != "" ) {
        passwordSpan.style.display="none";

    } else {
        passwordSpan.style.display="contents";
    }

})




/**
 * 
 *     true AND true =>  TRUE
 *     true AND true AND false =>  FALSE
 * 
 *     TRUE OR TRUE => TRUE
 *     TRUE OR FALSE => TRUE
 *     FALSE OR TRUE => TRUE
 *     FALSE OR FALSE => FALSE
 *      
 *      
 *     ( TRUE OR FALSE ) AND FALSE => FALSE
 *     (  true or false  )  OR ( TRUE OR FALSE ) => TRUE
 *      
 * 
 *      JS
 * 
 *      AND &&
 * 
 *      OR || 
 * 
 */





connectForm.addEventListener('submit',(event)=>{
    
 


    const usernameVAl = usernameInput.value;
    const passwordVAl = passwordInput.value;
     
   
           
    if (  (usernameVAl == '')  ||   ( passwordVAl== "") ) {
        event.preventDefault();

        // show alert messages !!!!

        if ( usernameVAl.length <= 3  ) {
            alertUsername.style.display="block"

            
            if ( usernameVAl.length == 0 ) {
                usernameMessageAlert.innerText="this feild is required"
            } else  if ( usernameVAl.length <= 3 ) {
                usernameMessageAlert.innerText="length shoudl be more than 3 chars"
            }

            
        }else{
            alertUsername.style.display="none"
        }

 


        if ( passwordVAl == '' ) {
            alertPassword.style.display="block"
        }else{
            alertPassword.style.display="none"
        }



    }
    

})
