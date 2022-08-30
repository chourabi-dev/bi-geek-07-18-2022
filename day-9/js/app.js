/*
var x;

var y;

var resultElement = document.getElementById("result");

x = 18;


y = 15;



var s = x + y;



console.log( "la somme de x et y = "+s );


resultElement.innerHTML = "la somme de x et y = "+s ;*/


/********************************** conditions ************************************ */

/*
var age;


age = 18;



if ( age < 18  ) {
    console.log("sorry");
}else if(   age == 18   ){
    console.log(" o_o ");
}else if( age > 18 ) {
    console.log("welcome");
}*/

/************************************iteration***************************** */

/*
var notes = [ 18,15,12,10,2,3,8,9,6,3,15,19,16 ] ;


var somme = 0;


for (let i = 0; i <  notes.length  ; i++  ) {
   

    somme = somme + notes[i]
    
}


var moy = ( somme / notes.length );


console.log("votre moy = "+moy);*/






// min

var notes = [ 18,15,12,10,2,3,8,9,6,3,15,19,16 ] ;


var min = notes[0];


for (let i = 0; i < notes.length; i++) {
    
    if ( notes[i]  < min  ) {
        min =  notes[i];

    }
    
}


console.log(min);


// valeur min = ?



// max


var notes = [ 18,15,12,10,2,3,8,9,6,3,15,19,16 ] ;


var max =  0;


for (let i = 0; i < notes.length; i++) {
    
    if ( notes[i]  > max  ) {
        max =  notes[i];

    }
    
}


console.log(max);


/************************************ array ************************************* */



var notes = [ 18,15,12,10,2,3,8,9,6,3,15,19,16 ] ;


/***
 * 
 * notes.push(20)
14
notes
(14) [18, 15, 12, 10, 2, 3, 8, 9, 6, 3, 15, 19, 16, 20]
notes.shift()
18
notes
(13) [15, 12, 10, 2, 3, 8, 9, 6, 3, 15, 19, 16, 20]
notes.pop()
20
notes.pop()
16
notes.pop()
19
notes
(10) [15, 12, 10, 2, 3, 8, 9, 6, 3, 15]
notes.splice(3,3)
(3) [2, 3, 8]
notes
(7) [15, 12, 10, 9, 6, 3, 15]

notes.sort()
(7) [10, 12, 15, 15, 3, 6, 9]
notes.sort( (a,b)=> a - b ) 
(7) [3, 6, 9, 10, 12, 15, 15]
notes.reverse()
(7) [15, 15, 12, 10, 9, 6, 3]


 */