var productStr = localStorage.getItem('panier');


var panierArray = productStr.split(',');

var res = document.getElementById('res');

 
var message="Panier : ";

panierArray.map((p)=>{
    message = message+ p+' - '
})



res.innerHTML = message;