/**
 * var div = document.getElementById("mydiv");


// GET
var content = div.innerText;


console.log(content);


// SET


div.innerText="bonjour"
 */


/**
 * var myinput = document.getElementById("myinput");

var inputValue = myinput.value;


console.log(inputValue);


myinput.value="xyze"
 */


/*
var circleElement = document.getElementById("circle");


circleElement.style.height="50px";
circleElement.style.width="50px";
circleElement.style.borderRadius="50%";
circleElement.style.backgroundColor="red";*/



/**
 * var element = document.getElementById('exmpl');


element.innerHTML = "<h1>bonjour</h1>"
 */

 
 
// function  // procedure
function somme( x , y ){

    let s = x + y; 
    return s; 
}

function multi( x , y ){

    let r = x * y; 
    return r; 
}
  
function calcul(){
    var inputOne = document.getElementById("input1");
    var inputTwo = document.getElementById("input2");
    var opElement = document.getElementById('op');

    const op = opElement.value ;


    var resElement = document.getElementById('res');


    var x = Number(inputOne.value);
    var y = Number(inputTwo.value);

    var res = 0;

    if ( op == "+") {
          res = somme(x,y);
    } else if( op == "*" ) {
          res = multi(x,y);
    }
    
 


    resElement.innerHTML="Result : "+res;
}





/*

var listElement = document.getElementById("list");
var inputElement = document.getElementById("shoppinginput");


function ajouter(){
    let val = inputElement.value;

    if ( val != "" ) {
        listElement.innerHTML=    listElement.innerHTML +    "<li>"+val+"</li>";

        inputElement.value=""
    }else{
        inputElement.style.border="1px solid red"
    }
}

*/