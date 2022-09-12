var productListElement = document.getElementById('products-list');


var productsList = [

    {  id:1 , name:"HP pavillion"  },
    {  id:2 , name:"Sony vaio"  },
    {  id:3 , name:"Asus mana3rech"  },
    
];

function ajouterAuPanier(id){
    
    const panier = localStorage.getItem('panier');

    if (panier == null) {
        
        localStorage.setItem('panier', [id])
    }else{
        let oldPanier = localStorage.getItem('panier');

        let tmpArray = oldPanier.split(',');

        tmpArray.push(id);


        localStorage.setItem('panier', tmpArray)

    }

}

function init(){


    let htmlBLOC = '';

    productsList.map( (p)=>{
        const liElement = '<li>'+p.name+' <br>  <button onclick="ajouterAuPanier('+p.id+')" > ajouter au panier </button></li>';


        htmlBLOC = htmlBLOC + liElement;
    } )


    productListElement.innerHTML = htmlBLOC;
}




init();